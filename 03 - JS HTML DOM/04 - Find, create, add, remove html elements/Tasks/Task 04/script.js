const myDiv = document.querySelectorAll('.highlight');

myDiv.forEach(item => {
    document.getElementById('btn').addEventListener('click', () => {
        item.classList = 'bg';
    });
});
