//Create a Promise that randomly resolves or rejects.Use .catch() to handle the rejection and log an appropiate message to the console.
function randomPromise(){
    return new Promise((resolve,reject )=>{
        const randomNumber = Math.random();
        if (randomNumber>0.5) {
            resolve("Promise resolved");
        }
        else{
            reject("Promise rejected");
        }
    });
}
randomPromise().then(message => {
    console.log(message);
})
.catch(error => {
    console.error("Caught a rejection :",error);
});