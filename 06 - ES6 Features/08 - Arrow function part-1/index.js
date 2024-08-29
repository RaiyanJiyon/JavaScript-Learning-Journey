// Traditional function to display a greeting message
function displayMessage1(name) {
    return `Hello ${name}`;  // Return a greeting message with the provided name
};

console.log(displayMessage1("John"));  // Output: "Hello John"

// Arrow function to display a greeting message
const displayMessage2 = (name) => {
    return `Hello ${name}`;  // Return a greeting message with the provided name
};

console.log(displayMessage2("Wick"));  // Output: "Hello Wick"


// Traditional function to sum two numbers
function sum1(num1, num2) {
    return num1 + num2;  // Return the sum of num1 and num2
};

console.log(sum1(10, 20));  // Output: 30


// Arrow function to sum two numbers
const sum2 = (num1, num2) => num1 + num2;  // Return the sum of num1 and num2 in a concise arrow function
console.log(sum2(100, 200));  // Output: 300