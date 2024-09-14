const colors = ['red', 'blue', 'green', 'yellow'];
let currentColorIndex = 0;

let myButton = document.getElementById('btn');
myButton.addEventListener('click', () => {
    let body = document.getElementById('body');
    body.style.backgroundColor = colors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % colors.length;
});