// Define the first task as a promise that resolves immediately
const taskOne = () => {
    return new Promise((resolve, reject) => {
        resolve("Promise 1 is completed."); // Resolve with a success message
    });
};

// Define the second task as a promise that resolves after a 2-second delay
const taskTwo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise 2 is completed."); // Resolve after a delay
        }, 2000);
    });
};

// Define the third task as a promise that rejects immediately
const taskThree = () => {
    return new Promise((resolve, reject) => {
        reject("Promise 3 is not completed."); // Reject with an error message
    });
};

// Define the fourth task as a promise that resolves immediately
const taskFour = () => {
    return new Promise((resolve, reject) => {
        resolve("Promise 4 is completed."); // Resolve with a success message
    });
};

// Execute the promises sequentially using `.then` chaining
taskOne()
    .then((res => console.log(res)))  // Log the result of taskOne
    .then(taskTwo)                    // Proceed to taskTwo
    .then((res) => console.log(res))  // Log the result of taskTwo
    .then(taskThree)                  // Proceed to taskThree
    .then((res) => console.log(res))  // Log the result of taskThree
    .then(taskFour)                   // Proceed to taskFour
    .then((res) => console.log(res))  // Log the result of taskFour
    .catch(err => console.log(err))   // Catch any errors from the promises and log them
    .finally(() => console.log("Program Ended."));  // Always execute this block when all promises are settled