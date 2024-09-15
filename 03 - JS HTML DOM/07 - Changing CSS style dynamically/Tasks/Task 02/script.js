const box = document.querySelector('.div');

box.addEventListener('mouseover', () => {
    box.style.backgroundColor = 'aqua';
});

box.addEventListener('mouseout', () => {
    box.style.backgroundColor = 'red';
});