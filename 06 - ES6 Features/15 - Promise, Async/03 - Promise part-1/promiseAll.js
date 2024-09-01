const promise1 = new Promise((resolve, reject) => {
    let isCompleted = true;

    if (isCompleted) {
        resolve("Promise 1 completed.");
    } else {
        reject(new Error("Promise 1 rejected."));
    }
});

const promise2 = new Promise((resolve, reject) => {
    let isCompleted = true;

    if (isCompleted) {
        resolve("Promise 2 completed.");
    } else {
        reject(new Error("Promise 2 rejected."));
    }
});

// Use Promise.all to handle multiple promises
Promise.all([promise1, promise2])
    .then(([res1, res2]) => {
        // This block runs if all promises are resolved
        console.log([res1, res2]);  // Log the results from all promises
    })
    .catch((err) => {
        // This block runs if any of the promises are rejected
        console.log(err.message);  // Log the error message
    })
    .finally(() => {
        // This block runs after either all promises resolve or one rejects
        console.log("Program Finished.");  // Indicate that the program is done
    });
