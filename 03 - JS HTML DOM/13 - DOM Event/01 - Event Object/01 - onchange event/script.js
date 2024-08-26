// Clear the console to ensure no previous logs interfere with current output
console.clear();

// Select the text input element with the name attribute "name"
let input = document.querySelector("input[name=name]");

// Add an event listener to the text input that triggers when its value changes
input.addEventListener('change', changeHandler);

// Event handler for the text input change event
function changeHandler(e) {
    // Log the entire input element
    console.log(e.target);
    // Log the class name of the input element (if any)
    console.log(e.target.className);
    // Log the id of the input element (if any)
    console.log(e.target.id);
    // Log the current value of the input element
    console.log(e.target.value);
}

// Select all checkbox elements with the name attribute "dept"
let programs = document.querySelectorAll("input[name=dept]");

// Add an event listener to each checkbox that triggers when its value changes
programs.forEach((program) => {
    program.addEventListener('change', programHandler);
});

// Event handler for checkbox change events
function programHandler(e) {
    // If the checkbox is checked, log its value
    if (e.target.checked) {
        console.log(e.target.value);
    }
}

// Select the dropdown (select) element with the id "course"
let course = document.querySelector("#course");

// Add an event listener to the dropdown that triggers when the selected option changes
course.addEventListener('change', courseHandler);

// Event handler for the dropdown change event
function courseHandler(e) {
    // Log the value of the selected option in the dropdown
    console.log(e.target.value);
}
