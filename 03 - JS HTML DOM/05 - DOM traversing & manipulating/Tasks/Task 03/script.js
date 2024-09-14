const myButton = document.getElementById('addButton');
const list = document.getElementById('list');
let count = 0;

myButton.addEventListener('click', () => {
    count++;
    const newItem = document.createElement('li');
    newItem.textContent = `New Item ${count}`;
    list.appendChild(newItem);
});