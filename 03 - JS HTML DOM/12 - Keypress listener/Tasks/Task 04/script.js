const inputField = document.getElementById('textInput');
const keyCombo = document.getElementById('keyCombo');

inputField.addEventListener('keydown', function (event) {
    if (event.shiftKey && event.key !== 'Shift') {
        keyCombo.textContent = `Shift + ${event.key}`;
    }
});