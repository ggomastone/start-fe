//문제풀기
//1. 문자열 합치기
const year = 2022;
const month = 11;
const day = 3;

//퀴즈
const dateString = year+"-"+month+"-0"+day;
console.log(dateString);

//2. 문자열 분리
const datestring = "2022-12-12";
const word = datestring.split('-');

//퀴즈
console.log(word);

//3. 문자열 변경
const Text = "나는 xx를 좋아해";
const item = "JS";

//퀴즈
console.log(Text.replace("xx", item));

//4. 문자열 검색
const text = "안녕하세요. 나는 사람입니다.";
const searchText = "사람";

//퀴즈
console.log(text.includes(searchText));

//5. 모든 배열값 더하기
const point1 = [12, 34, 80, 72];
const point2 = [1, 80, 94];

//퀴즈
var sum = 0;
var sum2 = 0;
point1.forEach((item) => {
    sum += item;
});
point2.forEach((item) => {
    sum2 += item;
})
console.log(sum + sum2);

//6. 소수점 이하를 버리고 정수 구하기
const a = 1.2;
const b = 3.4;

//퀴즈
console.log(parseInt(a) + parseInt(b));

//7. 랜덤수 구하기
const min = 1;
const max = 10;

//퀴즈
console.log(parseInt(Math.random() * 10 + 1));

//8. 배수 확인
const target = 10;
const num = 3;

//퀴즈
if(target % num == 0){
    console.log(true);
} else{
    console.log(false);
}

//9. 대문자로 변경
const nick = "kakao";

//퀴즈
const upper = nick.toUpperCase();
console.log(upper);

//10. 원시타입 요소만 배열로 만들기
const items = [1, "a", true, ["a"], { n: 1 }];

//퀴즈

//11. 배열값 나누기
const Alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
const pageSize = 3;

//퀴즈
