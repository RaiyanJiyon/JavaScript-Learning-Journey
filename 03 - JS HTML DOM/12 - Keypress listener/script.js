// Get the number of elements with the class "btn"
let len = document.querySelectorAll(".btn").length;

// Loop through each element with the class "btn"
for (let i = 0; i < len; i++) {
    // Get the current button element
    let buttons = document.querySelectorAll(".btn")[i];

    // Add a click event listener to the current button
    buttons.addEventListener("click", function() {
        // Get the text content of the clicked button
        let text = this.innerHTML;

        // Play the audio corresponding to the button's text
        playAudio(text);

        // Play the animation corresponding to the button's text
        playAnimation(text);
    });
}

// Add a keypress event listener to the document
document.addEventListener("keypress", function(event) {
    // Get the pressed key
    let text = event.key;

    // Play the audio corresponding to the pressed key
    playAudio(text);

    // Play the animation corresponding to the pressed key
    playAnimation(text);
});

// Function to play audio based on the given text
function playAudio(text) {
    switch (text) {
        case "a":
            // Create a new Audio object for the 'a' sound
            var audio = new Audio("../11 - How to add and remove animation/audio/a.mp3");
            // Play the audio
            audio.play();
            break;
        case "b":
            // Create a new Audio object for the 'b' sound
            var audio = new Audio("../11 - How to add and remove animation/audio/b.mp3");
            // Play the audio
            audio.play();
            break;
        case "c":
            // Create a new Audio object for the 'c' sound
            var audio = new Audio("../11 - How to add and remove animation/audio/c.mp3");
            // Play the audio
            audio.play();
            break;

        // Default case (if the text is not 'a', 'b', or 'c')
        default:
            break;
    }
}

// Function to play an animation based on the given text
function playAnimation(text) {
    // Select the element with the class matching the text
    let hoverButton = document.querySelector("." + text);

    // Add the "hover" class to the selected element
    hoverButton.classList.add("hover");

    // Set a timeout to remove the "hover" class after 1 second
    setTimeout(() => {
        hoverButton.classList.remove("hover");
    }, 1000);
}

// Initialize a count variable
let count = 0;

// Add a keypress event listener to the textarea element
document.querySelector("textarea").addEventListener("keypress", function(event) {
    // Get the pressed key
    let key = event.key;

    // Update the content of the element with the ID "para" to display the count
    document.querySelector("#para").innerHTML = "" + count;

    // Increment the count
    count++;
});