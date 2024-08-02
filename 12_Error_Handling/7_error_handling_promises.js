//Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects , and log the error message to the console.

async function randomPromise(){
    return new Promise((resolve,reject)=>{
        const random = Math.random();
        if (random>0.5) {
            resolve("Success!");
        }
        else{
            reject("Error occurred!");
        }
    });
}
async function handleRandomPromise(){
    try{
        const result = await randomPromise();
        console.log(result);
    }
    catch(error){
        console.error("Caught an error:",error);
    }
}
handleRandomPromise();