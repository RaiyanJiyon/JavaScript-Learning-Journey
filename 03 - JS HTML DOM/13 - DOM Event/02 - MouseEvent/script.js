// Clear the console to remove any previous logs
console.clear();

// Select all elements with the class "btn"
let buttons = document.querySelectorAll('.btn');

// Iterate over the NodeList of buttons and add a click event listener to each
Array.from(buttons).map((button) => {
    button.addEventListener('click', function(e) {
        // Log the inner text of the clicked button along with "Clicked"
        console.log(e.target.innerText + " Clicked");
    });
});

// Select the button with the class "btn1"
let button = document.querySelector(".btn1");

// Add a single-click event listener to the button
button.addEventListener('click', function() {
    console.log("Click");  // Log "Click" when the button is clicked once
});

// Add a double-click event listener to the button
button.addEventListener('dblclick', function() {
    console.log("Double Click");  // Log "Double Click" when the button is double-clicked
});

// Add a mousedown event listener to the button
button.addEventListener('mousedown', function() {
    console.log("Mouse Down");  // Log "Mouse Down" when the mouse button is pressed down on the button
});

// Add a mouseup event listener to the button
button.addEventListener('mouseup', function() {
    console.log("Mouse Up");  // Log "Mouse Up" when the mouse button is released over the button
});

// Add a mouseenter event listener to the button
button.addEventListener('mouseenter', function() {
    console.log("Mouse Enter");  // Log "Mouse Enter" when the mouse pointer enters the button area
});

// Add a mouseleave event listener to the button
button.addEventListener('mouseleave', function() {
    console.log("Mouse Leave");  // Log "Mouse Leave" when the mouse pointer leaves the button area
});

// Add a mousemove event listener to the button
button.addEventListener('mousemove', function(e) {
    console.log("Mouse Move");  // Log "Mouse Move" when the mouse pointer is moved within the button area
    
    // Log the X and Y coordinates of the mouse pointer relative to the viewport
    console.log(`X Axis = ${e.clientX} Y Axis = ${e.clientY}`);
    
    // Log the X and Y coordinates of the mouse pointer relative to the button element
    console.log(`X Axis = ${e.offsetX} Y Axis = ${e.offsetY}`);
});

// Add a mouseover event listener to the button
button.addEventListener('mouseover', function() {
    console.log("Mouse Over");  // Log "Mouse Over" when the mouse pointer is moved over the button
});
