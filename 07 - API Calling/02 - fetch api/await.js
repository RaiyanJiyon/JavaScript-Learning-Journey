// Async function to make a request using the Fetch API
const makeRequest = async (url, config) => {
    try {
        // Await the fetch request and store the response
        let res = await fetch(url, config);

        // Check if the response status is not OK (status code outside 200-299)
        if (!res.ok) {
            let message = `Error: ${res.status}`;  // Construct error message
            throw new Error(message);  // Throw error to be caught in the catch block
        }

        // Await the parsing of the response body as JSON
        let data = await res.json();
        return data;  // Return the parsed JSON data
    } catch (error) {
        // Handle any errors that occur during the fetch or JSON parsing
        console.error(error);
        throw error;  // Re-throw the error to handle it in the calling function
    }
}

// Function to GET data from the server (retrieve posts)
const getData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts')
        .then((res) => console.log(res))  // Log the data if the request succeeds
        .catch((err) => console.log(err));  // Log any errors
}

// Function to POST (send) new data to the server
const sendData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',  // Specify POST request method
        body: JSON.stringify({  // Convert the data object to JSON string format
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',  // Set the content type as JSON
        },
    })
        .then((res) => console.log(res))  // Log the response from the server
        .catch((err) => console.log(err));  // Log any errors
}

// Function to PUT (update) existing data completely on the server
const updateData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',  // Specify PUT request method
        body: JSON.stringify({  // Convert the data object to JSON string format
            title: 'fooMA',
            body: 'barMa',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',  // Set the content type as JSON
        },
    })
        .then((res) => console.log(res))  // Log the updated response from the server
        .catch((err) => console.log(err));  // Log any errors
}

// Function to PATCH (partially update) data on the server
const updateSingleData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PATCH',  // Specify PATCH request method
        body: JSON.stringify({  // Send only the fields that need updating
            title: 'Folk Jonson',
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',  // Set the content type as JSON
        },
    })
        .then((res) => console.log(res))  // Log the updated response from the server
        .catch((err) => console.log(err));  // Log any errors
}

// Function to DELETE data from the server
const deleteData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',  // Specify DELETE request method
    })
        .then((res) => console.log(res))  // Log the response confirming deletion
        .catch((err) => console.log(err));  // Log any errors
}

// Uncomment one of the following to test the requests:

// getData();         // Retrieve data (GET)
// sendData();        // Send new data (POST)
// updateData();      // Update existing data (PUT)
// updateSingleData();// Partially update data (PATCH)
// deleteData();      // Delete data (DELETE)
