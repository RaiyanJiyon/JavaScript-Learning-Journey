// Select the textarea element on the page
let key = document.querySelector('textarea');

// Add a keydown event listener to the textarea
key.addEventListener('keydown', function(e) {
    // Check if the key is being held down (repeated)
    if (e.repeat) {
        alert("Do not repeat the key");  // Display an alert if the key is repeated
    }
});

// Add a keypress event listener to the textarea
key.addEventListener('keypress', function(e) {
    console.log("Key Press");  // Log "Key Press" when a key is pressed down
});

// Add a keyup event listener to the textarea
key.addEventListener('keyup', function(e) {
    console.log("Key Up");  // Log "Key Up" when a key is released
    console.log(e.key);     // Log the specific key that was released
    console.log(e.shiftKey); // Log whether the Shift key was pressed during the key event
    console.log(e.ctrlKey);  // Log whether the Ctrl key was pressed during the key event
});
