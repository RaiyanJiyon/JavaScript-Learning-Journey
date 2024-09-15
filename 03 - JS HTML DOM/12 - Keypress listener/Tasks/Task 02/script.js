const inputField = document.getElementById('textInput');

inputField.addEventListener('keydown', function (event) {
    console.log(`Key pressed: ${event.key} (Key code: ${event.code})`);
});