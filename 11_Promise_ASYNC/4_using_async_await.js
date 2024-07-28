//write an asyne function that waits for a promise to resolve and then logs the resolved value.
const task4Promise = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve('Task 4 resolved');
    },2000);
});

const task4=async()=>{
    const result=await task4Promise;
    console.log(result);
};
task4();