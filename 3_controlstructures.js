// if-else statement
let a=3;
if (a>0) {
    console.log("Positive")
}
else if (a==0) {
    console.log("zero")
}
else{
    console.log("Negetive")
}


let age = 17;
if (age>=18) {
    console.log("eligible")
}
else{
    console.log("Not eligible")
}

//Nested If
let p =3;
let q= 4;
let r = 5;
let largest;
if(p>=q){
    if(p>=r){
        largest=p;
    }
    else{
        largest=r;
    }
}
else{
    if(q>=r){
        largest=q;
    }
    else{
        largest=r;
    }
}

console.log("Largest number is ",largest);

//Switch Case
const week = 5;
switch(week){
  case 1:
  console.log("Sunday");
  break;
  case 2:
  console.log("Monday");
  break;
  case 3:
  console.log("Tuesday");
  break;
  case 4:
  console.log("Wednesday");
  break;
  case 5:
  console.log("Thusday");
  break;
  case 6:
  console.log("Friday");
  break;
  case 7:
  console.log("Sunday");
  break;
  default:
  console.log("Invalid");
   
}

const score = 88;
switch(true){
  case score>=90:
  console.log("A");
  break;
  case score>=70:
  console.log("B");
  break;
  case score>=50:
  console.log("C");
  break;
  case score>=30:
  console.log("D");
  break;
  default:
  console.log("Fail");
}

//Conditional Operator(Ternary)
function evenodd(num){
    return num%2==0 ? "even":"odd";
}
console.log(evenodd(5));

//Combining Conditions

let n=2024;
if(n%4==0 && n%400==0 || n%100!=0){
    
    console.log("Leap Year")
}   
else{
    console.log("Not Leap year")
}
