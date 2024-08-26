// Add an event listener for when the window finishes loading
window.addEventListener('load', function() {
    console.log("Load");  // Log message when the window has fully loaded
});

// Add an event listener for when the window is about to unload (e.g., navigate away)
window.addEventListener('unload', function() {
    console.log("Unload");  // Log message when the window is unloading
});

// Add an event listener for when the user scrolls within the window
window.addEventListener('scroll', function() {
    console.log("Scroll");  // Log message when the window is scrolled
});

// Add an event listener for when the window is resized
window.addEventListener('resize', function() {
    let width = this.window.outerWidth;   // Get the outer width of the window
    let height = this.window.outerHeight; // Get the outer height of the window
    console.log(`width ${width} height ${height}`);  // Log the new width and height
});

// Select the <details> element on the page
let details = document.querySelector('details');

// Add an event listener for when the <details> element is toggled (opened/closed)
details.addEventListener('toggle', function(e) {
    console.log(e.target.open);  // Log whether the <details> element is open (true) or closed (false)
});
