document.getElementById('changeContent').addEventListener('click', () => {
    document.getElementById('content').textContent = 'Updated Div';
    document.getElementById('text').textContent = 'Updated Paragraph';
    document.querySelector('span').textContent = 'Updated Span';
});
