// Define a function named squareNumber that takes a number as an argument
// and logs its square to the console.
function squareNumber(num) {
    console.log(`Square number of ${num}: ${num * num}`);
}

// Assign the squareNumber function to a new constant called square.
// Now, square can be used as a reference to the squareNumber function.
const square = squareNumber;

// Define a higher-order function named higherOrderFunction that takes
// a number and a callback function as arguments. It calls the callback
// function, passing the number as an argument.
function higherOrderFunction(num, callback) {
    callback(num);
}

// Call higherOrderFunction, passing the number 10 and the square function as arguments.
// This will execute the square function with 10 as the argument.
higherOrderFunction(10, square);
