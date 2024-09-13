// Spread operator with objects

let p1 = {
    name: "John Wick",
    age: 25,
};

let p2 = {
    nationality: "Russian",
    occupation: "Actor",
};

// Merge p1 and p2 into a new object 'p' using the spread operator
let p = {...p1, ...p2};
console.log(p);  // Output: {name: "John Wick", age: 25, nationality: "Russian", occupation: "Actor"}


// Spread operator with arrays

let a1 = [1, 2, 3];
let a2 = [4, 5, 6];

// Normal way to concatenate arrays using the concat method
let a3 = a1.concat(a2);
console.log(a3);  // Output: [1, 2, 3, 4, 5, 6]

// Concatenate arrays using the spread operator
let a4 = [...a1, ...a2];
console.log(a4);  // Output: [1, 2, 3, 4, 5, 6]


// Spread operator with functions

// Function with parameters a, b, and a rest parameter c
function printNum(a, b, ...c) {
    // Log the values of a, b, and the rest of the numbers in c
    console.log(`a = ${a} | b = ${b} | c = ${c}`);
}

let numbers = [10, 20, 30];

// Normal way to call the function using individual elements of the array
printNum(numbers[0], numbers[1], numbers[2]);  
// Output: a = 10 | b = 20 | c = 30

// Call the function using the spread operator to pass array elements as individual arguments
printNum(...numbers);  
// Output: a = 10 | b = 20 | c = 30
