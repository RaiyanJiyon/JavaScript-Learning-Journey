const list = document.getElementById('myList');
const button = document.getElementById('addItemButton');

button.addEventListener('click', () => {
    const newItem = document.createElement('li');
    newItem.textContent = 'New Item';
    list.appendChild(newItem);

    newItem.addEventListener('click', () => {
        newItem.innerText = 'Item Clicked';
    });
});