//배열 메소드
//pop, push, join
var words = ["a", "b", "c"]; //결과값 ["c"]
console.log(words.pop(), words);

words.push("d");

console.log(words);

console.log(words.join("-"));

//concat
var numbers = [1, 2, 3];
console.log(words.concat(numbers));

//unshift
var words = ["a", "b", "C"];
console.log(words.unshift("z"));

//splice
var words = ["a", "b", "c"];
console.log(words.splice(2));
console.log(words.splice(0, 1));
console.log(words);

//foreach
var words = ["a", "b", "c"];
words.forEach(function(words){
    console.log(words);
})

//map
var words = ["a", "b", "c"];
var newWords = words.map(function(words){
    return words + " ok";
})
console.log(newWords);

//filter
var nums = [1, 2, 3, 4, 5]
var newNums = [];
for(var i=0;i<nums.length; i++){
    if(nums[i] >= 3){
        newNums.push(nums[i]);
    }
}
console.log(newNums);

var newNums = nums
.filter(function(num){
    return num >= 3;
})
.map(function(num){
    return num + 10;
})
console.log(newNums);