const itemList = document.getElementById('itemList');

itemList.addEventListener('click', (event) => {
    if (event.target.classList.contains('removeItem')) {
        const listItem = event.target.parentElement;
        itemList.removeChild(listItem);
    };
});