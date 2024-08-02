//Create a custom error class that extends built in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.


class CustomError extends Error{
    constructor (message){
        super(message);
        this.name="CustomError";
    }
}
function throwCustomError(){
    throw new CustomError("This is a custom error");
}
try{
    throwCustomError();
}
catch(error){
    if(error instanceof CustomError){
        console.error("Caught a custom error:" ,error.message);
    }
    else{
        console.error("Caught an error",error.message);
    }
}