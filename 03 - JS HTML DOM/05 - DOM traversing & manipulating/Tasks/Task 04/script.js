const itemList = document.querySelector('.itemList');
const removeButton = document.getElementById('removeButton');

removeButton.addEventListener('click', () => {
    if (itemList.lastElementChild) {
        itemList.removeChild(itemList.lastElementChild)
    };
});
