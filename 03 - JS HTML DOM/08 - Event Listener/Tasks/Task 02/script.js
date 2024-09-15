const box = document.querySelector('.box');

box.addEventListener('mouseover', () => {
    box.style.backgroundColor = 'yellow';
});

box.addEventListener('mouseout', () => {
    box.style.backgroundColor = 'white';
});
