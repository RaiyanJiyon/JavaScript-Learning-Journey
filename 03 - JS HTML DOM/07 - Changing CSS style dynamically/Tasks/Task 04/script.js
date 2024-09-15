const increaseButton = document.getElementById('increaseFontButton');
const decreaseButton = document.getElementById('decreaseFontButton');
const text = document.getElementById('text');

increaseButton.addEventListener('click', () => {
    text.style.fontSize = '2rem';
});

decreaseButton.addEventListener('click', () => {
    text.style.fontSize = '0.5rem';
});