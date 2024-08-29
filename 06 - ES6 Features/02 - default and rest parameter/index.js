// Function with a default parameter for 'name'
function displayName(name = "No Name Entered") {
    // Log the name to the console. If no argument is passed, it will use the default value.
    console.log(`${name}`);
}

// Call the displayName function without arguments, so it uses the default parameter
displayName();  // Output: "No Name Entered"

// Call the displayName function with an argument, which overrides the default parameter
displayName("John Wick");  // Output: "John Wick"


// Function with default parameters 'a' and 'b', and a rest parameter 'c'
function printNumbers(a = 0, b = 0, ...c) {
    // Log the values of 'a', 'b', and 'c' to the console
    // 'c' will be an array containing any additional arguments passed to the function
    console.log(`a = ${a} | b = ${b} | c = ${c}`)
}

// Call the printNumbers function without arguments, using the default parameters
printNumbers();  // Output: "a = 0 | b = 0 | c ="

// Call the printNumbers function with multiple arguments
printNumbers(10, 20, 40, 50, 60, 70);  // Output: "a = 10 | b = 20 | c = 40,50,60,70"
