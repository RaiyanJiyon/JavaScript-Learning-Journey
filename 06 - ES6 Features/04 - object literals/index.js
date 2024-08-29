// Function that returns an object with properties 'name' and 'age'
function studentInfo(name, age) {
    // ES6 shorthand property names allow us to return an object with properties
    // that have the same names as the variables passed in as arguments
    return {
        name, // Equivalent to 'name: name'
        age   // Equivalent to 'age: age'
    };
}

// Call the function and log the returned object to the console
console.log(studentInfo("John", 42));  
// Output: { name: "John", age: 42 }


// Object with a method 'body' defined using shorthand syntax
let message1 = {
    // Method 'body' returns a string when called
    body() {
        return `Hi I am an object function`;
    },
};

// Call the 'body' method of 'message1' and log the result
console.log(message1.body());  
// Output: "Hi I am an object function"


// Object with a method that has a space in its name
let message2 = {
    // Method name 'body function' contains a space, so it's defined as a string key
    'body function'() {
        return `Hi I am a space function name object function`;
    },
};

// Call the 'body function' method using bracket notation and log the result
console.log(message2['body function']());  
// Output: "Hi I am a space function name object function"
