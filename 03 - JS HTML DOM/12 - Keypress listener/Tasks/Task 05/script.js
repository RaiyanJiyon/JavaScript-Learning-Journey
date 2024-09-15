const textInput = document.getElementById('textInput');
const keyCombo = document.getElementById('keyCombo');
let enteredKeys = []; 

textInput.addEventListener('keydown', (event) => {
    if (['a', 'b', 'c'].includes(event.key)) {
        event.preventDefault();
        alert(`The key "${event.key}" is blocked!`);
    } else {
        enteredKeys.push(event.key);
        keyCombo.textContent = enteredKeys.join('');
    };
});