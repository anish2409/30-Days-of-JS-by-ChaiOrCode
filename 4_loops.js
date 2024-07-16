//For Loop
for(let i=1;i<11;i++){
    console.log("Hello",i)
}

for(let j=1;j<11;j++){
    console.log(5*j)
}

//While Loop
let k=1;
let sum =0;
while (k<=10) {
    sum +=k;
    ++k;
}
console.log(sum);

let l=10;
while(l>0){
    console.log(l)
    l--;
}

//do while loop
m=1;
do{
    console.log(m);
    m++;
}while(m<=5);

//factorial by do while loop
let no=5;
let re=1;
let p=no;
do{
    re*=p;
    p--;
}while(p>0);
console.log(re);


//Nested loop
for(let x=0;x<5;x++){
    for(let y=0;y<=x;y++){
        console.log("* ");
    }
    console.log(" ");
}

// Loop control statement
//1.Write a program to print numbers form 1 to 10 ,but skip the number 5 using the continue statement.
for(let z=1;z<=10;z++){
    if(z==5){
        continue;
    }
    console.log(z)
}
//2.Write a program to print numbers theform 1 to 10 ,but stop the loop when the number is 7 using the break.

for(let r=1;r<=10;r++){
    if(r==7){
        break;
    }
    console.log(r)
}