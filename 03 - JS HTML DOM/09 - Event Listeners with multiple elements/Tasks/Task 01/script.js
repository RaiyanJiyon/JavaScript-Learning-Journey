const myButtons = document.querySelectorAll('.myButton');
myButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('You clicked '+ button.textContent);
    });
});