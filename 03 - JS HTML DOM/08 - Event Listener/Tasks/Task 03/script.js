const keyInput = document.getElementById('keyInput');
const keyOutput = document.getElementById('keyOutput');

keyInput.addEventListener('keydown', (event) => {
    keyOutput.textContent =  event.target.value;
});