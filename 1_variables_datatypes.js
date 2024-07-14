// Variable Declaration

var number = 1;
console.log(number);

let StringValue = "abc";
console.log(StringValue);

// Constant Declaration

const isTrue  = true;
console.log(isTrue);

//Data Types

let n= 3;
let isFalse =false;
let str = "abc";
let arr = [1,2,3,4,5];
let obj = {name:"anish",age:20};

console.log(typeof(n));
console.log(typeof(isFalse));
console.log(typeof(str));
console.log(typeof(arr));
console.log(typeof(obj));


//Reassigning Value

let num =4;
function reassignValue(){
    num = 5;
}
reassignValue();
console.log(num);

// Understanding Const

//Try reassign a varible declared with const and observe the error.
const num1 = 5;
function reassignValue1(){
    num1 = 6;
}
reassignValue1();
console.log(num);





