const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const fullNameDisplay = document.getElementById("fullName");

function updatedFullName() {
    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;
    fullNameDisplay.textContent = `${firstName} ${lastName}`;
};

firstNameInput.addEventListener('change', updatedFullName);
lastNameInput.addEventListener('change', updatedFullName);