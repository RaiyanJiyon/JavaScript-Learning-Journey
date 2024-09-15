const dimensions = document.getElementById('dimensions');

function updateDimensions() {
    dimensions.textContent = `Window dimensions: ${window.innerWidth} x ${window.innerHeight}`;
}

window.addEventListener('resize', updateDimensions);

// Initial call to display the dimensions
updateDimensions();


