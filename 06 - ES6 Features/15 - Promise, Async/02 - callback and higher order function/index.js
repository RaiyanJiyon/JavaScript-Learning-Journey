// Define a function named task1 that takes a callback function as an argument.
// It logs "Task 1....." to the console and then calls the callback function.
function task1(callback) {
    console.log("Task 1.....");
    callback();
};

// Define a function named task2 that takes a callback function as an argument.
// It uses setTimeout to simulate loading data for 3 seconds before logging "Task 2 data is loading....."
// and then calls the callback function.
function task2(callback) {
    setTimeout(() => {
        console.log("Task 2 data is loading.....");
        callback();
    }, 3000);
};

// Define a function named task3 that takes a callback function as an argument.
// It logs "Task 3....." to the console and then calls the callback function.
function task3(callback) {
    console.log("Task 3.....");
    callback();
};

// Define a function named task4 that takes a callback function as an argument.
// It logs "Task 4....." to the console and then calls the callback function.
function task4(callback) {
    console.log("Task 4.....");
    callback();
};

// Define a function named task5 that does not take any arguments.
// It logs "Task 5....." to the console.
function task5() {
    console.log("Task 5.....");
};

// Execute task1 and pass a callback that executes task2.
// task2 receives a callback that executes task3, and so on until task5 is executed.
// This creates a sequence where each task is executed in order, one after the other.
task1(() => {
    task2(() => {
        task3(() => {
            task4(() => {
                task5();
            });
        });
    });
});
