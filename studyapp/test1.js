const listUrl =
  'https://gist.githubusercontent.com/niceaji/d34fcd2d593bef75c277fe1f4a0ee519/raw/6698dab524040e1f0d48d4f8282476a5e5b53640/sentences.json';
const translateUrl = 'https://translate.google.com/?sl=en&tl=ko&text=';

const loadingElem = document.querySelector('#loading');
const boxElem = document.querySelector('#box');
const timerElem = document.querySelector('#timer');
const sentenceElem = document.querySelector('#sentence');
const countElem = document.querySelector('.count');
const translateElem = document.querySelector('#translate');
const nextElem = document.querySelector('#next');

let sentences = [];
let currentIndex = 0;
let timerIntervalId = null;

// 문장을 랜덤하게 가져오는 함수
async function getRandomSentence() {
  try {
    const response = await fetch(listUrl);
    const data = await response.json();
    return data[Math.floor(Math.random() * data.length)];
  } catch (error) {
    console.error(error);
  }
}

// 문장을 한글로 번역하는 함수
function translateSentence(sentence) {
  window.location.href = `${translateUrl}${encodeURIComponent(sentence)}`;
}

// 문장을 화면에 보여주는 함수
function showSentence(sentence) {
  sentenceElem.innerText = sentence;
  countElem.innerText = `${currentIndex + 1}/${sentences.length}`;
}

// 타이머를 시작하는 함수
function startTimer() {
  let timeLeft = 100;
  timerElem.style.width = `${timeLeft}%`;

  timerIntervalId = setInterval(() => {
    timeLeft--;
    timerElem.style.width = `${timeLeft}%`;

    if (timeLeft === 0) {
      clearInterval(timerIntervalId);
      showSentence(sentences[currentIndex]);
    }
  }, timeLimit / 100);
}

// 다음 문장으로 이동하는 함수
function goToNextSentence() {
  if (currentIndex === sentences.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  startTimer();
  showSentence('Loading...');
  loadingElem.style.display = 'block';
  boxElem.style.display = 'none';

  setTimeout(async () => {
    const randomSentence = await getRandomSentence();
    sentences[currentIndex] = randomSentence.sentence;
    loadingElem.style.display = 'none';
    boxElem.style.display = 'block';
    showSentence(randomSentence.translation);
  }, 1000);
}

// Next 버튼 클릭 이벤트 핸들러 등록
nextElem.addEventListener('click', goToNextSentence);

// 앱 초기화 함수
async function init() {
  const randomSentence = await getRandomSentence();
  sentences.push(randomSentence.sentence);
  showSentence(randomSentence.translation);
}

init();