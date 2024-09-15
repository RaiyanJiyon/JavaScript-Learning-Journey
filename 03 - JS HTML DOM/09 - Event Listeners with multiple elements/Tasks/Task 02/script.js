const boxes = document.querySelectorAll('.colorBox');

boxes.forEach(box => {
    box.addEventListener('click', () => {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        box.style.backgroundColor = randomColor;
    });
});