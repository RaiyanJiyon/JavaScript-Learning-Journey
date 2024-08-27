// Select the input element on the page
let input = document.querySelector('input');

// Add a blur event listener to the input
input.addEventListener('blur', function(e) {
    // Change the background color to transparent when the input loses focus
    input.style.backgroundColor = "transparent";
    
    // Remove padding when the input loses focus
    input.style.padding = "0";
    
    // Log the current value of the input field
    console.log(e.target.value);
    
    // Convert the input value to uppercase and store it in the upperCase variable
    let upperCase = e.value = e.target.value.toUpperCase();
    
    // Log the uppercase value of the input
    console.log(upperCase);
});

// Add a focus event listener to the input
input.addEventListener('focus', function() {
    // Change the background color to orange when the input gains focus
    input.style.backgroundColor = "orange";
    
    // Add padding when the input gains focus
    input.style.padding = "2rem";
});

// Add a focusin event listener to the input
input.addEventListener('focusin', function() {
    // Log a message when the input or any child element gains focus
    console.log("Focus In is occurred.");
});

// Add a focusout event listener to the input
input.addEventListener('focusout', function() {
    // Log a message when the input or any child element loses focus
    console.log("Focus Out is occurred.");
});
