const myParagraph = document.querySelectorAll('.myParagraph');
const button = document.getElementById('changeButton');

button.addEventListener('click', () => {
    myParagraph.forEach((paragraph, index) => {
        paragraph.textContent = `Change Paragraph ${index + 1}`;
    });
});