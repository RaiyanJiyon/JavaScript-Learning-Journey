const changeButton = document.querySelector('.changeButton');
const paragraph = document.querySelector('.paragraph');

changeButton.addEventListener('click', () => {
    paragraph.classList.add('changeColor');
});