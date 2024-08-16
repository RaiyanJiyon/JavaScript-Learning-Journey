let names = ["Alex", "John", "Roman", "Bob", "Harry", "Peter"];
console.log(names);

// Add items with splice method
names.splice(2, 0, "Kane", "Ali");
console.log(names); // ["Alex", "John", "Kane", "Ali", "Roman", "Bob", "Harry", "Peter"]

// Remove the first item with splice method
names.splice(0, 1);
console.log(names); // ["John", "Kane", "Ali", "Roman", "Bob", "Harry", "Peter"]


let fruits = ["Mango", "Apple", "Jackfruit", "Orange"];

// Original array remains unchanged:
console.log(fruits); // ["Mango", "Apple", "Jackfruit", "Orange"]

// Extracted portion of the array:
console.log(fruits.slice(2, 4)); // ["Jackfruit", "Orange"]


let foods = ["Burger", "Pizza", "Mutton", "Chicken Fry"];
console.log(foods);

// unshift will add items in first index
foods.unshift("Biriyani");
console.log(foods);

// shift will remove items in first index
foods.shift();
console.log(foods);


// sort method
console.log(foods.sort());

// reverse sort
foods.reverse();
console.log(foods);

// sorting for numbers
let numbers = [1, 3, 5, 2, 7, 6, 9];
console.log(numbers);
numbers.sort(function(a, b) {
    return a - b;
})
console.log(numbers);


// reverse sorting for numbers
numbers.sort(function(a, b) {
    return b - a;
})
console.log(numbers);


