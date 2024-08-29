// Square numbers using forEach function
let numbers1 = [1, 2, 3, 4, 5];  // Array of numbers
let squareNumbers1 = [];  // Empty array to hold squared numbers

// Iterate over each number in 'numbers1' using forEach
numbers1.forEach(function(x) {
    // Square the current number and push it to 'squareNumbers1'
    squareNumbers1.push(x * x);
});
console.log(squareNumbers1);  // Output: [1, 4, 9, 16, 25]


// Square numbers using map function
let numbers2 = [1, 3, 5, 7, 9];  // Array of numbers

// Use the map function to create a new array with squared numbers
let squareNumbers2 = numbers2.map(function(x) {
    return x * x;  // Return the square of the current number
});
console.log(squareNumbers2);  // Output: [1, 9, 25, 49, 81]


// Square numbers greater than 20 using filter and map functions
let numbers3 = [10, 20, 30, 40, 50];  // Array of numbers

// Filter the numbers to only those greater than 20
let filterNumber = numbers3.filter(function(x) {
    return x > 20;  // Return true if the number is greater than 20
});

// Map the filtered numbers to their squares
let squareNumbers3 = filterNumber.map(function(x) {
    return x * x;  // Return the square of the current number
});
console.log(squareNumbers3);  // Output: [900, 1600, 2500]
