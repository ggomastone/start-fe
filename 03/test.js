// //배열 create
// const todos = ['운동'];
// const todo = "공부";
// todos.push(todo);
// console.log(todos);

// //read
// todos.forEach(function(todo){
//     console.log(todo);
// });

// //update
// const updateTodo = '공부';
// const updateIndex = todos.findIndex(function(todo){
//     return todo === updateTodo;
// });
// //todos[updateIndex] = '게임';
// //console.log(todos);
// const newTodos = todos.map(function(todo) {
//     if (todo === updateTodo) {
//       return '게임';
//     }
//     return todo;
//   });
//   console.log(newTodos);

// //값 value
// var a = 1;
// var b = a;
// b = 2;
// console.log(a, b);

// var a = [1];
// var b = a;
// b[0] = [2];
// console.log(a, b);

// // //setTimeout
// // function test() {
// //     console.log('test()');
// //   }

// //   var id = setInterval(test, 1000);

// //유효범위
// var nick = 'aji'; //전역변수

// function test() {
//   var age = 30; //지역변수
//   console.log(nick, age);
// }

// test();
// console.log(age);

// //호스팅
// var name = 'global';
// function test() {
//   console.log(name);
//   var name = 'local';
//   console.log(name);
// }

//구구단
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for(var i=0; i<arr.length; i++){
//     for(var j=0; j<arr.length; j++){
//  console.log(arr[i] + "*" + arr[j] + "=" + arr[i] * arr[j]);   
//     }
// }

// function gugudan(n){
//     for(var i=1; i<10; i++){
//         console.log(n +"*" + i + "=" + n * i);
//     }
// }
// gugudan(1);
// gugudan(2);
// gugudan(3);
// gugudan(4);
// gugudan(5);
// gugudan(6);
// gugudan(7);
// gugudan(8);
// gugudan(9);

//평균값
// var count = [10, 20, 30, 40, 50, 60, 70, 100];
// var avg = 0;

// for (var i=0; i<count.length; i++){
//     avg += count[i];
// }
// console.log(avg / count.length);

// //메소드 객체
// let obj = {
//     show1: function(){
//         console.log('show1() 메소드 출력');
//     }
// }
// obj.show1();

let n = Number(prompt('첫번째 숫자를 입력하세요 : '));
let m = Number(prompt('두번째 숫자를 입력하세요 : '));

alert(n + m);

