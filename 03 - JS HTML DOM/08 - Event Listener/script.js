// Select the button with the ID "alert-btn"
document.querySelector("#alert-btn").addEventListener("click", function() {
    // Display an alert message when the button is clicked
    alert("Are your age is over 18?");
});

// Select the h1 element
let heading = document.querySelector("h1");

// Select the h2 element
let myVar = document.querySelector("h2");

// Add the "hover" class to the h2 element when the mouse hovers over it
myVar.addEventListener("mouseover", function() {
    myVar.classList.add("hover");
});

// Remove the "hover" class from the h2 element when the mouse leaves it
myVar.addEventListener("mouseleave", function() {
    myVar.classList.remove("hover");
});

// Select the button with the ID "hover-btn"
let myBtn = document.querySelector("#hover-btn");

// Add the "hover" class to the button when the mouse hovers over it
myBtn.addEventListener("mouseover", function() {
    myBtn.classList.add("hover");
});

// Remove the "hover" class from the button when the mouse leaves it
myBtn.addEventListener("mouseleave", function() {
    myBtn.classList.remove("hover");
});