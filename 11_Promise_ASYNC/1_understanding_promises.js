//Create a promise that resolves with a message to the console
const task1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('Task 1 resolved after 2 seconds');
    },2000)
});
task1.then(message =>{
    console.log(message);
})