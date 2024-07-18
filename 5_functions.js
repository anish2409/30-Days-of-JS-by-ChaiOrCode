//Function Declaration
function evenOdd(num){
    return num%2==0 ?"even":"odd";
}
console.log(evenOdd(5));

function square(n){
    return n*n;
}
console.log(square(4));

//Function Expression
function findMaximum(a,b){
    return a>b?"a is maximum":"b is maximum";
}
console.log(findMaximum(5,3));

function concatString(){
    let str= "You";
    let value=str.concat(" ","are"," ","Brillient");
    console.log(value);
}
concatString();

//Arrow Functions
const addTwoNo =(FirstNo,SecondNo)=>{
    return FirstNo+SecondNo;
}
console.log(addTwoNo(4,9));

const containsCharacter = (str, char) => str.includes(char);
console.log(containsCharacter("hello", "e")); 
console.log(containsCharacter("world", "a")); 

//Paramters and Default values
function myFunction(x,y=10){
    return x+y;
}
myFunction(5);

function funNameage(name,age=18){
    return `${name} age is ${age}`
}
console.log(funNameage("Anish"));


//Higher Order Function
function repeatFunction(func,times){
    for(let i =0 ;i<times;i++){
        func();
    }
}
function sayHello(){
    console.log("Hello");
}
repeatFunction(sayHello,5);

function applyFunc(func1,func2,value){
    return func2(func1(value));
}
const addone = x => x+ 1;
const squre = x => x * x;

const result = applyFunc(addone,square,2);
console.log(result);
    
