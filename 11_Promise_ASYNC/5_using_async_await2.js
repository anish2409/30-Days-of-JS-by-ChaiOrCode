 const task5Promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject('Task 5 rejected');
    },2000);
});

const task5 =async()=>{
    try{
        const result = await task5Promise;
        console.log(result);
    }
    catch (error){
        console.error(error);
    }
};
task5();