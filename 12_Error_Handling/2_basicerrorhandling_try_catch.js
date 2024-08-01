//Create a function that divides two numbers and throws an error if the demonitor is zero . Use a try-catch block to handle this error.
function divideNumber(a,b){
    if(b===0){
        throw new Error("Dominator cannot be zero");
    }
    return a/b;
}

try{
    console.log(divideNumber(10,2));
    console.log(divideNumber(10,0));
}
catch(error){
    console.error("Caught an Error",error.message);
}