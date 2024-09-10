document.querySelectorAll('#items').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.add('bg-primary')
    })
});