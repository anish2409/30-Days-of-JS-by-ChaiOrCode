//Create a promise that rejects with an error message after a 2 second timeout and handle the error using.catch().

const task2 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('Task 1 resjected after 2 seconds');
    },2000)
});task2.catch(error=>{
    console.error(error);
})
