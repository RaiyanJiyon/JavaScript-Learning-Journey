const circleButton = document.getElementById('circleButton');
const squareButton = document.getElementById('squareButton');
const addBorderButton = document.getElementById('addBorderButton');
const removeBorderButton = document.getElementById('removeBorderButton');
const box = document.getElementById('box');

circleButton.addEventListener('click', () => {
    box.style.borderRadius = '50%';
});

squareButton.addEventListener('click', () => {
    box.style.borderRadius = '0';
});

addBorderButton.addEventListener('click', () => {
    box.style.border = '2px solid red';
});

removeBorderButton.addEventListener('click', () => {
    box.style.border = 'none';
});
