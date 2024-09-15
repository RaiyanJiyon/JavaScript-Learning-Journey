const toggleBox = document.querySelectorAll('.toggleBox');

toggleBox.forEach(box => {
    box.addEventListener('click', () => {
        box.classList.toggle('highlighted');
    });
});