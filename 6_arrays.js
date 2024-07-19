// Array Creation and Access
arr = [1,2,3,4,5]
console.log(arr);
console.log(arr[0],arr[arr.length-1]);
//Arrays Methods(Basic)
arr1=[2,4,6,8,10]
console.log(arr1);
arr1.push(19);
console.log(arr1);
arr1.pop(19);
console.log(arr1);
arr1.shift();
console.log(arr1);
arr1.unshift(8596);
console.log(arr1);
// Array Methods
let numbers=[1,3,5,7,9]
let a =numbers.map((value)=>{
    console.log(value)
    return value * value        //map method
})
console.log(a);


function checkEven(evena){
    return evena%2==0;
}                           //filter method
function func(){
    let filtered = [1,2,3,4,5,6,7,8].filter(checkEven);
    console.log(filtered);
}
func();


let arr5=[10,20,30,40,50,60]
function sumofArray(sum,num){
    return sum+num;
}                           //reduce method
function illuminati(item){
    console.log(arr5.reduce(sumofArray));
}
illuminati();

//Array Iteration
let arr6=[2,4,3,5,6,8]
for(let i=0;i<arr6.length;i++){
    console.log(arr6[i]);           //for loop
}

arr6.forEach((element)=>{
    console.log(element*element);      //foreach method
})

//Multi Dimentional Array

let x = [
    [20, 'Pranshu', 'Lucknow'],
    [21, 'Sameer', 'Varanasi'],
    [22, 'Kartikeya', 'Lakhimpur']
];

console.log(x);
console.log(x[0][1]);





