const emailForm = document.getElementById('emailForm');
const emailInput = document.getElementById('emailInput');
const emailOutput = document.getElementById('emailOutput');

function validEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

function handleSubmit(event) {
    event.preventDefault();

    const email = emailInput.value.trim();

    if (validEmail(email)) {
        emailOutput.textContent = `Valid Email`;
        emailOutput.style.color = 'green';
    } else {
        emailOutput.textContent = `Invalid Email! Please Enter Again`;
        emailOutput.style.color = 'red';
    };
};

emailForm.addEventListener('submit', handleSubmit);