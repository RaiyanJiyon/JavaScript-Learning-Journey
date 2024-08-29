// Normal for loop to iterate over an array

let arr1 = [10, 20, 30, 40, 50];

// Iterate over each element in 'arr1' using a traditional for loop
for (let i = 0; i < arr1.length; i++) {
    // Log the current element to the console
    console.log(arr1[i]);  // Output: 10, 20, 30, 40, 50
}


// forEach loop to iterate over an array

let arr2 = [1, 2, 3, 4, 5];

// Use the forEach method to iterate over 'arr2' and execute a function for each element
arr2.forEach(function(x) {
    // Log the current element to the console
    console.log(x);  // Output: 1, 2, 3, 4, 5
});


// Using forEach loop to perform operations on each element

/*
Square each number in an array
*/
let arr3 = [100, 200, 300, 400, 500];
let squareNumbers;

// Use forEach to iterate over 'arr3' and calculate the square of each element
arr3.forEach(function(x) {
    // Calculate the square of the current element and store it in 'squareNumbers'
    squareNumbers = x ** 2;
    // Log the squared number to the console
    console.log(squareNumbers);  // Output: 10000, 40000, 90000, 160000, 250000
});


/*
Add 5 to each number in an array
*/
let arr4 = [1, 3, 5, 7, 9];

// Use forEach to iterate over 'arr4' and modify each element by adding 5
arr4.forEach(function(x, index, arr) {
    // Add 5 to the current element and update the array in place
    arr[index] = x + 5;    
});

// Log the modified array to the console
console.log(arr4);  // Output: [6, 8, 10, 12, 14]