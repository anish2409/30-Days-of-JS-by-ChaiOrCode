// Use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console.
fetch('https://invalid-url.com').then(response => {
    if(!response.ok ){
        throw new Error('Network response was not ok');
    }
    return response.json();
}).then(data =>{
    console.log(data);
}).catch(error =>{
    console.error('Fetch error:',error);
});