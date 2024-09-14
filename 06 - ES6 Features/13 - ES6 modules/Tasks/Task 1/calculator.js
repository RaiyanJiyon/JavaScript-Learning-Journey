/*
Task 1: Calculator Module
Create a module called calculator.js that contains the following functions:

add(a, b) - returns the sum of two numbers.
subtract(a, b) - returns the difference of two numbers.
multiply(a, b) - returns the product of two numbers.
divide(a, b) - returns the division of two numbers.
In another file called app.js, import these functions and use them to:

Add 5 and 3, subtract 9 from 12, multiply 6 by 7, and divide 10 by 2.
Log the results to the console.
*/


function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a * b;
};

export {add, subtract, multiply, divide};