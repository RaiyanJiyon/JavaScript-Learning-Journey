// 4 ways to call api - XMLHttpRequest, fetch, axios, jquery
// axios is a js library
// it helps to make request from browser (plain js/Vue/React/Angular), node.js

// + very easy to use
// + it supports all modern browser includig IE
// + it returns promise
// + throws error brilliantly
// + No need to set header cause axios is intelligent

// axios(config)
// axios(url [, config])

// axios.get(url [, config])
// axios.post(url [, config])
// axios.put(url [, config])
// axios.patch(url [, config])
// axios.delete(url [, config])

// axios returns response object - data, status, statusText, headers, config

// Clear the console for better readability of output
console.clear();

// GET request to retrieve a post
axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then((res) => {
        console.log(res.data);  // Log the response data (the post) from the server
    })
    .catch((err) => {
        console.log(err);  // Log any errors that occur during the request
    });

// POST request to send new data (create a new post)
axios.post('https://jsonplaceholder.typicode.com/posts', {
    title: 'foo',
    body: 'bar',
    userId: 1,
})
    .then((res) => {
        console.log(res.data);  // Log the response data (created post) from the server
    })
    .catch((err) => {
        console.log(err);  // Log any errors that occur during the request
    });

// PUT request to completely update an existing post
axios.put('https://jsonplaceholder.typicode.com/posts/1', {
    title: 'fooMa',
    body: 'barMa',
    userId: 1,
})
    .then((res) => {
        console.log(res.data);  // Log the updated post data from the server
    })
    .catch((err) => {
        console.log(err);  // Log any errors that occur during the request
    });

// PATCH request to partially update an existing post
axios.patch('https://jsonplaceholder.typicode.com/posts/1', {
    title: 'folk Stun',  // Only update the 'title' field
})
    .then((res) => {
        console.log(res.data);  // Log the partially updated post data
    })
    .catch((err) => {
        console.log(err);  // Log any errors that occur during the request
    });

// DELETE request to remove a post
axios.delete('https://jsonplaceholder.typicode.com/posts/1')
    .then((res) => {
        console.log(res.data);  // Log the response (confirming deletion)
    })
    .catch((err) => {
        console.log(err);  // Log any errors that occur during the request
    });
