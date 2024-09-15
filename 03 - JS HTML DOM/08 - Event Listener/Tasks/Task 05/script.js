const eventButton = document.getElementById('eventButton');

eventButton.addEventListener('click', () => {
    eventButton.textContent = 'Clicked';
});

eventButton.addEventListener('mouseover', () => {
    console.log('Mouse is over the button!');
});

eventButton.addEventListener('mouseout', () => {
    console.log('Mouse has left the button!');
});