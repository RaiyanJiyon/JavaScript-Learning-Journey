const myButton = document.getElementById('btn');
const myList = document.getElementById('myList');
let itemCount = 0;

myButton.addEventListener('click', () => {
    itemCount++;

    const newItem = document.createElement('li');
    newItem.textContent = `Item ${itemCount}`;
    myList.appendChild(newItem);
});