let div = document.querySelector(".div-class");
let paragraph = document.querySelector("#para-id");

paragraph.addEventListener('dragstart', function(e) {
    e.dataTransfer.setData("Text", e.target.id);  // Set the ID of the dragged element as data
});

div.addEventListener('dragover', function(e) {
    e.preventDefault();  // Allow the drop by preventing the default behavior
});

div.addEventListener('drop', function(e) {
    let id = e.dataTransfer.getData("Text");  // Get the ID of the dragged element
    console.log(id);  // Log the ID for debugging
    div.appendChild(document.getElementById(id));  // Move the dragged element into the div
    e.preventDefault();  // Prevent the default drop behavior
});
