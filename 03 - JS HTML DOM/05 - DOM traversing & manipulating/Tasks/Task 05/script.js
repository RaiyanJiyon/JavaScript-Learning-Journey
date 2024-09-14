const container = document.getElementById('container');
const highlightButton = document.getElementById('highlightButton');

highlightButton.addEventListener('click', () => {
    const firstBox = container.firstElementChild;
    firstBox.classList.toggle('highlight');
});