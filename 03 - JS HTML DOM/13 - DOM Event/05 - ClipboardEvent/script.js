// Select the input element on the page
let input = document.querySelector('input');

// Select the paragraph element on the page
let paragraph = document.querySelector('p');

// Add a copy event listener to the input
input.addEventListener('copy', function() {
    // Update the paragraph text when content is copied from the input
    paragraph.innerText = "You have copied this.";
});

// Add a cut event listener to the input
input.addEventListener('cut', function() {
    // Update the paragraph text when content is cut from the input
    paragraph.innerText = "You have cut this.";
});

// Add a paste event listener to the input
input.addEventListener('paste', function() {
    // Update the paragraph text when content is pasted into the input
    paragraph.innerText = "You have pasted this.";
});
