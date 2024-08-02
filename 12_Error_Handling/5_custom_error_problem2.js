// Write a function that validates user input (e.g.checking if a string is not empty),and throws a custom error if the validation fails.Handle the custom error using a try-catch block.

class validationError extends Error{
    constructor(message){
        super(message);
        this.name="validationError";
    }
}
function validateInput(input){
    if(input === ""){
        throw new validationError("Input cannot be empty");
    }
    return true;
}
try{
    validateInput("");
}
catch(error){
    if(error instanceof validationError){
        console.error("Caught a validation error",error.message);
    }
    else{
        console.error("Caught an Error",error.message);
    }
}