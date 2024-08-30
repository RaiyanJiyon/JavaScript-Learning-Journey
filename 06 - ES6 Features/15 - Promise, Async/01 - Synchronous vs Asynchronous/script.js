// Define task1 as an arrow function that logs a message indicating Task 1 is complete.
let task1 = () => {
    console.log("Task 1 is complete.");
};

// Define setTime as an arrow function that logs a message indicating Task 2 is complete.
// This will be used inside the setTimeout function to simulate a delay.
let setTime = () => {
    console.log("Task 2 is complete.");
};

// Define task2 as an arrow function that schedules the execution of setTime after 2 seconds (2000 ms).
let task2 = () => {
    setTimeout(setTime, 2000);
};

// Define task3 as an arrow function that logs a message indicating Task 3 is complete.
let task3 = () => {
    console.log("Task 3 is complete.");
};

// Define task4 as an arrow function that logs a message indicating Task 4 is complete.
let task4 = () => {
    console.log("Task 4 is complete.");
};

// Define task5 as an arrow function that logs a message indicating Task 5 is complete.
let task5 = () => {
    console.log("Task 5 is complete.");
};

// Execute task1 immediately.
task1();

// Execute task2, which will log Task 2 is complete after 2 seconds.
task2();

// Execute task3 immediately.
task3();

// Execute task4 immediately.
task4();

// Execute task5 immediately.
task5();