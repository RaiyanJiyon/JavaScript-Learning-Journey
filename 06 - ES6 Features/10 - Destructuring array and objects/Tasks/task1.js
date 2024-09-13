/*
Task 1: Swapping Variables Using Array Destructuring
You can use array destructuring to swap values between variables without needing a temporary variable.
*/

let numbers1 = [1, 2, 3];
let numbers2 = [4, 5, 6];

[numbers1, numbers2] = [numbers2, numbers1];

console.log(numbers1);
console.log(numbers2);