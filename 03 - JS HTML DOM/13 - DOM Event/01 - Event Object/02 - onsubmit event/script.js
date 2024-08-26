// Select the form element on the page
let form = document.querySelector('form');

// Select the input elements by their IDs inside a div
let name = document.querySelector('div #name');
let email = document.querySelector('div #email');
let password = document.querySelector('div #password');

// Add an event listener to the form that triggers when the form is submitted
form.addEventListener('submit', formHandler);

// Event handler function for the form submission
function formHandler(e) {
    // Prevent the default form submission behavior (e.g., page refresh)
    e.preventDefault();

    // Create an object to store the user input data
    let userInfo = {
        name: name.value,         // Get the value of the name input field
        email: email.value,       // Get the value of the email input field
        password: password.value, // Get the value of the password input field
    }

    // Log the user information object to the console
    console.log(userInfo);

    // Clear the input fields after form submission
    name.value = "";
    email.value = "";
    password.value = "";
}
