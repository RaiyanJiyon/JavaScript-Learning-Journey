const text = document.getElementById('text');
const hideButton = document.getElementById('hideButton');
const showButton = document.getElementById('showButton');

hideButton.addEventListener('click', () => {
    text.classList.add('hidden');
});

showButton.addEventListener('click', () => {
    text.classList.remove('hidden');
});