const listItem = document.querySelectorAll('#listItem');

listItem.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.classList.add('bg-color');
    });

    item.addEventListener('mouseout', () => {
        item.classList.remove('bg-color');
    });
});