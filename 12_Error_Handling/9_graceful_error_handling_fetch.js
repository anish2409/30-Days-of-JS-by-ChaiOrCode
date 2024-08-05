//Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch.Log an appropriate error message.
async function fetchData(){
    try{
        const response = await fetch('https://invalid-url.com');
        if(!response.ok){
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
    }
    catch(error){
        console.error('Fetch error',error);
    }
}
fetchData();