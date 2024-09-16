const userForm = document.getElementById('userForm');
const userOutput = document.getElementById('userOutput');
const usernameInput = userForm.querySelector('input[name="username"]');
const passwordInput = userForm.querySelector('input[name="password"]');

function validateForm(event) {
    event.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    // Reset previous error styles
    resetErrors();

    if (!username && !password) {
        showError('Please fill both username and password!');
    } else if (!username) {
        showError('Please enter a username.');
    } else if (!password) {
        showError('Please enter a password.');
    } else if (password.length < 8) {
        showError('Password should be at least 8 characters long.');
    } else {
        showSuccess('Successfully submitted the form.');
        // Here you can add code to submit the form if needed
        // userForm.submit();
    }
}

function showError(message) {
    userOutput.textContent = message;
    userOutput.style.color = 'red';
}

function showSuccess(message) {
    userOutput.textContent = message;
    userOutput.style.color = 'green';
}

function resetErrors() {
    userOutput.textContent = '';
    userOutput.style.color = '';
}

userForm.addEventListener('submit', validateForm);