// Function that returns a resolved promise immediately
const taskOne = () => {
    return new Promise((resolve, reject) => {
        resolve("Promise 1 is completed.");  // Resolving with a success message
    });
};

// Function that returns a promise that resolves after a 2-second delay
const taskTwo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise 2 is completed.");  // Resolving with a success message after a delay
        }, 2000);
    });
};

// Function that returns a rejected promise immediately
const taskThree = () => {
    return new Promise((resolve, reject) => {
        reject("Promise 3 is not completed.");  // Rejecting with an error message
    });
};

// Function that returns a resolved promise immediately
const taskFour = () => {
    return new Promise((resolve, reject) => {
        resolve("Promise 4 is completed.");  // Resolving with a success message
    });
};

// Async function to execute the tasks sequentially using async/await
const displayAll = async () => {
    try {
        // Await the resolution of taskOne and log the result
        let t1 = await taskOne();
        console.log(t1);

        // Await the resolution of taskTwo and log the result
        let t2 = await taskTwo();
        console.log(t2);

        // Await the resolution of taskThree and log the result
        let t3 = await taskThree();
        console.log(t3);

        // Await the resolution of taskFour and log the result
        let t4 = await taskFour();
        console.log(t4);
    } catch (error) {
        // Catch any errors that occur during the execution of the tasks
        console.log(error);
    }
}

// Call the async function to execute all tasks
displayAll();