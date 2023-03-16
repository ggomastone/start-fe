//변수 선언

//number
var count = 5;
console.log(count);

//string
var count = "5";

var nick = "AJ"
var nick = 'AJ';

//boolean (if문, for문)
var isMan = true;

//function 
var log = function(str){
    console.log(str)
}

log(nick);

//object
var image = {};
var image = {alt: "test"};

image.height = 100;
image.width = 100;

console.log(image);
console.log(image.height);
console.log(image['width']);

//array
var image = ["1.jpg", "2.jpg"];
console.log(image, image.length);

image[0] = "3.jpg";
image[3] = "4.jpg";
console.log(image);

//null
var nick = '';
var title = -1;
var isMan = null; //true, flase, null

//undefined
var a;
console.log(a, nick);

//배열
var arr = [1, 2, 3, 4, 5];
for (var i=0; i<arr.length - 1; i++){
    console.log(arr[i]);
}

//배열 메소드

