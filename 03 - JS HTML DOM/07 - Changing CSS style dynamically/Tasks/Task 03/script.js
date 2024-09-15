const bodyContainer = document.getElementById('body-container');
const button = document.getElementById('nightButton');

button.addEventListener('click', () => {
    bodyContainer.classList.toggle('custom');
});