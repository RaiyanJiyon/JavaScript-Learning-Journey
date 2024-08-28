try {
    // Attempt to execute the following code block
    alert("Hi Everyone");  // This will display an alert with the message "Hi Everyone"
    alert(x);  // This will cause an error because 'x' is not defined
    alert("Bye Everyone");  // This won't be executed due to the error above
} catch (error) {
    // If an error occurs in the try block, this block will be executed
    alert("Error Occurs");  // This will display an alert with the message "Error Occurs"
    console.log(error);  // Logs the entire error object to the console
    console.log(error.name);  // Logs the name of the error (e.g., "ReferenceError")
    console.log(error.message);  // Logs the error message (e.g., "'x' is not defined")
} finally {
    // This block will always be executed, regardless of whether an error occurred
    alert("JavaScript is Insane");  // This will display an alert with the message "JavaScript is Insane"
}