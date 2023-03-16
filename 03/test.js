//배열 create
const todos = ['운동'];
const todo = "공부";
todos.push(todo);
console.log(todos);

//read
todos.forEach(function(todo){
    console.log(todo);
});

//update
const updateTodo = '공부';
const updateIndex = todos.findIndex(function(todo){
    return todo === updateTodo;
});
//todos[updateIndex] = '게임';
//console.log(todos);
const newTodos = todos.map(function(todo) {
    if (todo === updateTodo) {
      return '게임';
    }
    return todo;
  });
  console.log(newTodos);

//값 value
var a = 1;
var b = a;
b = 2;
console.log(a, b);

var a = [1];
var b = a;
b[0] = [2];
console.log(a, b);

// //setTimeout
// function test() {
//     console.log('test()');
//   }

//   var id = setInterval(test, 1000);

//유효범위
var nick = 'aji'; //전역변수

function test() {
  var age = 30; //지역변수
  console.log(nick, age);
}

test();
console.log(age);

//호스팅
var name = 'global';
function test() {
  console.log(name);
  var name = 'local';
  console.log(name);
}

