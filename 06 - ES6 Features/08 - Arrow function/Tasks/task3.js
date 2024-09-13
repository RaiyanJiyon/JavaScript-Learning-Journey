/*
Task 3: Filtering Positive Numbers
Using arrow functions with filter() to get all positive numbers.
*/

const numbers =  [1, 2, -3, 4, -5, -6, 7];

const positiveNumbers = numbers.filter(number => number > 0);
console.log(positiveNumbers);