const textInput = document.getElementById('textInput');

textInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        alert(`You entered: ${textInput.value}`)
    };
});