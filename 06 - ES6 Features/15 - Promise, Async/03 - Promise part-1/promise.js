// Create a new promise
const promise1 = new Promise((resolve, reject) => {
    let isCompleted = true;  // Flag to control whether the promise resolves or rejects

    if (isCompleted) {
        // If true, resolve the promise with a success message
        resolve("Promise 1 process");
    } else {
        // If false, reject the promise with an error message
        reject("Promise 1 rejected");
    }
});

// Handle the resolved or rejected state of the promise
promise1
    .then((res) => {
        // This block runs if the promise is resolved
        console.log(res);  // Log the success message
    })
    .catch(err => {
        // This block runs if the promise is rejected
        console.log(err);  // Log the error message
    })
    .finally(() => {
        // This block runs after either the then or catch block
        console.log("Program Ends.");  // Log the end of the program
    });
