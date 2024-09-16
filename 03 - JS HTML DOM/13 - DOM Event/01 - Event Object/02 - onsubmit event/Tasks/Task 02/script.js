const nameForm = document.getElementById('nameForm');
const nameOutput = document.getElementById('nameOutput');

nameForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const firstName = nameForm.firstName.value;
    const lastName = nameForm.lastName.value;

    if (!firstName || !lastName) {
        nameOutput.textContent = 'Please fill in both fields!'
        nameOutput.style.color = 'red';
    } else {
        nameOutput.textContent = `Full Name: ${firstName} ${lastName}`;
        nameOutput.style.color = 'green';
    };
});