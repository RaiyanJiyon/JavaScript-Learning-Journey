const block = document.getElementById('block');
let topPosition = 100;
let leftPosition = 100;

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            topPosition -= 10;
            block.style.top = topPosition + 'px';
            break;
    
        case 'ArrowDown':
            topPosition += 10;
            block.style.top = topPosition + 'px';
            break;
    
        case 'ArrowLeft':
            leftPosition -= 10;
            block.style.left = leftPosition + 'px';
            break;
    
        case 'ArrowRight':
            leftPosition += 10;
            block.style.left = leftPosition + 'px';
            break;
        default:
            break;
    };
});