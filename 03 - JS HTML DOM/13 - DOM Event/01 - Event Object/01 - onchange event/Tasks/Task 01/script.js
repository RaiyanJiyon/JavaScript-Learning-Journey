const selectFruits = document.getElementById('selectFruits');
const output = document.getElementById('output');

selectFruits.addEventListener('change', (event) => {
    output.textContent = event.target.value; 
});



