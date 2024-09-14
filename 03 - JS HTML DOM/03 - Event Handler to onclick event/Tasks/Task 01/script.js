let count = 0;
let myParagraph = document.getElementById('pId');
let myButton = document.getElementById('btn');

myButton.addEventListener('click', () => {
    count++;
    myParagraph.innerText = count;
})