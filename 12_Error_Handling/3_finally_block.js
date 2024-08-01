//Write a  script that includes a try-catch block and a finally block.Log messages in the try ,catch and finally blocks to observed the execution flow.
try{
    console.log("In try Block");
    throw new Error("An Error Occured");
}
catch(error){
    console.error("Caught an Error ",error.message);
}
finally{
    console.log("In finally Block");
}