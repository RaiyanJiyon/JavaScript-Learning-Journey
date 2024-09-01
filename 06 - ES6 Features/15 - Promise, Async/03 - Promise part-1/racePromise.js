// Create the first promise
const promise1 = new Promise((resolve, reject) => {
    let isComplete = true;  // Declare a flag to determine the promise's outcome

    if (isComplete) {
        // If the condition is true, resolve the promise after 3 seconds
        setTimeout(() => {
            resolve("Promise 1 completed");
        }, 3000);
    } else {
        // If the condition is false, reject the promise immediately
        reject("Promise 1 Rejected");
    }
});

// Create the second promise
const promise2 = new Promise((resolve, reject) => {
    let isComplete = false;  // Another flag for this promise

    if (isComplete) {
        // If true, resolve this promise after 1 second
        setTimeout(() => {
            resolve("Promise 2 completed");
        }, 1000);
    } else {
        // If false, reject the promise immediately
        reject("Promise 2 Rejected");
    }
});

// Use Promise.race to run both promises and take action on the first one to settle
Promise.race([promise1, promise2])
    .then((res) => {
        // Log the result if the first promise resolves
        console.log(res);
    })
    .catch(err => {
        // Log the error if the first promise rejects
        console.log(err);
    })
    .finally(() => {
        // This will run after the first promise either resolves or rejects
        console.log("Program Ends.");
    });
