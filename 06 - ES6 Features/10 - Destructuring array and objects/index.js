let numbers = [1, 2, 3, 4, 5];  // Array of numbers

// Normal way to print the value
/* 
console.log(numbers[0]);  // Print first element
console.log(numbers[1]);  // Print second element
console.log(numbers[2]);  // Print third element
*/

// Using Destructuring Array
// Destructure the array into individual variables
let [num1, num2, num3, num4, num5] = numbers;
console.log(num1);  // Output: 1
console.log(num2);  // Output: 2
console.log(num3);  // Output: 3


// Swap numbers
let n1 = 10;
let n2 = 20;

// Normal way to swap values
/*
n1 = n2;
n2 = n1;
console.log(n1);
console.log(n2);
*/

// Using Destructuring Array
// Swap the values of n1 and n2 using destructuring
[n1, n2] = [n2, n1];
console.log("Number 1 after swapping: ", n1);  // Output: 20
console.log("Number 2 after swapping: ", n2);  // Output: 10


// Creating an object
const person = {
    id: 221902113,
    name: "John Wick",
    language: {
        primary: 'Python',
        secondary: 'JavaScript',
    }
}

// Normal way to access object properties
/*
console.log(person.id);  // Access the id property
console.log(person.name);  // Access the name property
*/

// Using Destructuring to extract values from the object
const {id, name, language} = person;
console.log(id);  // Output: 221902113
console.log(name);  // Output: John Wick
console.log(language.primary);  // Output: Python
console.log(language.secondary);  // Output: JavaScript
