document.getElementById('addElement').addEventListener('click', () => {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'New Paragraph';
    document.getElementById('container').appendChild(newParagraph);
});