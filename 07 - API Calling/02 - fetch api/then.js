// 4 ways to call api - XMLHttpRequest, fetch, axios, jquery

// fetch() has replaced XMLHttpRequest
// fetch() - global method for making HTTP Request
// 2 ways to call - then, async await

// + fetch() is easy to use compare to XMLHttpRequest
// + fetch() returns a promise
// - returned promise can only handle network error
// - does not support all the older browser

// Clear the console for better visibility of outputs
console.clear();

// Using the Fetch API to make a POST request
fetch('https://jsonplaceholder.typicode.com/posts', {
    // Define the request method as POST
    method: 'POST',

    // Pass the data to be sent in the body, stringify the object to convert it into JSON format
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),

    // Set the headers, specifying that the content type is JSON
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    // First .then() handles the response
    .then((res) => {
        // Check if the response is not OK (status code outside the 200-299 range)
        if (!res.ok) {
            const message = `Error : ${res.status}`;  // Construct an error message with the status code
            throw new Error(message);  // Throw an error to be caught in the .catch() block
        }
        return res.json();  // If the response is OK, parse it as JSON
    })

    // Second .then() handles the parsed JSON response
    .then((res) => console.log(res))  // Log the response data to the console

    // Catch block handles any errors from the request or JSON parsing
    .catch((err) => console.log(err));  // Log the error message to the console
