document.getElementById('btn').addEventListener('click', () => {
    const newElement = document.createElement('p');
    const newContent = document.createTextNode('New Content Added.');
    newElement.appendChild(newContent);
    let myDiv = document.getElementById('myDiv');
    myDiv.appendChild(newElement);
});