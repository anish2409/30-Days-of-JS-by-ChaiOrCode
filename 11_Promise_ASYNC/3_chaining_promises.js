//Create a sequence of promises that simulate fetching data from a server.Chain the promises to log messages in a specific order.

const fetchData = (data,time) =>new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(data);
    },time)
});
fetchData('Fetching Data 1',1000).then(data=>{
    console.log(data);
    return fetchData('Fetching data 3',3000);
}).then(data=>{
    console.log(data);
})