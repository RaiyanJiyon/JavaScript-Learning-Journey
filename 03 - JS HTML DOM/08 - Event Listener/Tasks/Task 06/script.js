const box = document.querySelector('.box');
const toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', () => {
    box.classList.toggle('highlight');
});