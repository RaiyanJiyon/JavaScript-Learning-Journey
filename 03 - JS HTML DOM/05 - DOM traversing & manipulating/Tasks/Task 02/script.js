const parent = document.querySelector('div');

const secondChild = document.getElementById('para2');

secondChild.style.backgroundColor = 'red';

const firstChild = secondChild.previousElementSibling;
firstChild.style.color = 'blue';

const thirdChild = secondChild.nextElementSibling;
thirdChild.style.fontSize = '2rem';