const myForm = document.getElementById('myForm');

myForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('textInput').value;
    console.log(`Form submitted! Name: ${name}`);
});