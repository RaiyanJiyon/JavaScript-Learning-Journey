// Add an event listener to the button with the class 'btn'
document.querySelector('.btn').addEventListener('click', function() {
    // Get the value from the input field with the ID 'input-text'
    let input = document.querySelector('#input-text').value;
    console.log(input); // Log the input value to the console for debugging

    try {
        // Check if the input value is outside the 5-10 range
        if (input < 5 || input > 10) {
            // If the input is not in the range, throw an error with a custom message
            throw("Number is not in the 5-10 range");
        } else {
            // If the input is within the range, log the input value to the console
            console.log(input);
        }
    } catch (error) {
        // If an error is thrown, catch it and log the error message to the console
        console.log(error);
    }
});