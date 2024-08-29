// 'for...of' loop to iterate over an array

let names = ["John", "Roman", "Steve"];

// Iterate over each element in the 'names' array
for (const name of names) {
    // Log each name to the console
    console.log(name);  // Output: "John", "Roman", "Steve"
}

// 'for...in' loop to iterate over the properties of an object

let person = {
    id: 221902113,
    name: 'John Wick',
    age: 37
};

// Iterate over each key in the 'person' object
for (const key in person) {
    // Log each key-value pair to the console
    console.log(`${key}: ${person[key]}`);  
    // Output:
    // "id: 221902113"
    // "name: John Wick"
    // "age: 37"
}