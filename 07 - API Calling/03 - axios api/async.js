// Function to make a request using axios, it accepts a config object or a URL
const makeRequest = async (config) => {
    // Await and return the axios request, axios automatically resolves based on the config
    return await axios(config);
}

// Function to GET data (retrieve posts) from the server
const getData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts')  // Pass URL directly as config
        .then((res) => {
            console.log(res.data);  // Log the data received from the server
        }).catch((err) => {
            console.log(err);  // Log any errors that occur during the request
        });
}

// Function to POST (create) new data on the server
const createData = () => {
    makeRequest({
        url: 'https://jsonplaceholder.typicode.com/posts',  // URL to send the request to
        method: 'post',  // POST request to create a new resource
        data: JSON.stringify({  // Send data, converted to JSON string
            id: 1,
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
    })
        .then((res) => {
            console.log(res.data);  // Log the created resource data from the server
        }).catch((err) => {
            console.log(err);  // Log any errors during the request
        });
}

// Function to PUT (fully update) existing data on the server
const updateData = () => {
    makeRequest({
        url: 'https://jsonplaceholder.typicode.com/posts/1',  // URL of the resource to update
        method: 'put',  // PUT request to replace the resource with the new data
        data: JSON.stringify({  // Data to replace the resource with
            id: 1,
            title: 'fooMa',
            body: 'barMa',
            userId: 1,
        }),
    })
        .then((res) => {
            console.log(res.data);  // Log the updated resource data from the server
        }).catch((err) => {
            console.log(err);  // Log any errors during the request
        });
}

// Function to PATCH (partially update) existing data on the server
const updateSingleData = () => {
    makeRequest({
        url: 'https://jsonplaceholder.typicode.com/posts/1',  // URL of the resource to update
        method: 'patch',  // PATCH request to partially update the resource
        data : {
            // Directly pass the object, no need to stringify
            title: 'Jason Holder',
        },
    })
    .then((res) => {
        console.log(res.data);  // Log the partially updated resource data
    }).catch((err) => {
        console.log(err);  // Log any errors during the request
    });
}

// Function to DELETE an existing resource from the server
const deleteData = () => {
    makeRequest({
        url: 'https://jsonplaceholder.typicode.com/posts/1',  // URL of the resource to delete
        method: 'delete',  // DELETE request to remove the resource
    })
    .then((res) => {
        console.log(res.data);  // Log the response from the server (confirming deletion)
    }).catch((err) => {
        console.log(err);  // Log any errors during the request
    });
}

// Uncomment to test each function:
// getData();  // Test the GET request
// createData();  // Test the POST request
// updateData();  // Test the PUT request
// updateSingleData();  // Test the PATCH request
// deleteData();  // Test the DELETE request
