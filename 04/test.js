//템플릿 표현식
const title = 'jeju';
const url = 'https://daum.net/' + title;
const url2 = 'https://daum.net/${title}';

console.log(url, url2);

//기본 매개변수
function sum(x, y = 0){
    return x + y;
}
console.log(sum(10));

const result = [1, 2, 3].map(function(item) {
    return item + 1;
});

console.log(result);

//전개구문
const numbers = [1, 2, 3, 4];
// console.log(sum(...numbers));
const [x, y, z] = [...numbers];

console.log(y);


//Rest 파라미터
function func(...param) {
    console.log(param);
  }
  
  func(1, 2, 3);

//구조 분배 할당
  const obj = { team: 1, area: 2 };

  const team = obj.team;
  const area = obj.area;

  const { team1, area1 } = obj;

  //향상된 객체 리터럴
  const number = 1;
  const obj1 = {
    number,
  }