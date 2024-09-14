const form = document.getElementById('nameForm');
const nameInput = document.getElementById('nameInput');
const message = document.getElementById('message');

form.addEventListener('click', function(event) {
    event.preventDefault();

    if (nameInput.value.trim() === '') {
        message.textContent = 'Error: Please enter your name.';
        message.classList = 'error'
    } else {
        message.textContent = `Welcome ${nameInput.value}`;
        message.classList = 'success';
    };
});

