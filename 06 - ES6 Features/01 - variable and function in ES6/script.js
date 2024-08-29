// ES6 variable declaration using 'let', allows block-level scoping
let x = 10;

// Check if 'x' is truthy (which it is, since it's a non-zero number)
if (x == true) {
    x = 5;  // If true, reassign 'x' to 5
}
console.log(x);  // Log the value of 'x' (it will be 5 since x is treated as truthy)

// ES6 string interpolation using template literals
let firstName = "John";
let lastName = "Wick";

// Log the full name using template literals to combine firstName and lastName
console.log(`Full Name: ${firstName} ${lastName}`);

// ES6 arrow function to add two numbers
const add = (x, y) => {
    let sum = x + y;  // Calculate the sum of x and y
    console.log(sum);  // Log the sum
}

// Call the 'add' function with arguments 1 and 2
add(1, 2);