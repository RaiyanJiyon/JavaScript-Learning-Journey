const productSelect = document.getElementById('productSelect');
const quantityInput = document.getElementById('quantityInput');
const totalPriceDisplay = document.getElementById('totalPrice');

function calculateTotal() {
    const productPrice = Number(productSelect.value);
    const quantity = Number(quantityInput.value);
    const totalPrice = productPrice * quantity;
    totalPriceDisplay.textContent = totalPrice;
}

productSelect.addEventListener('change', calculateTotal);
quantityInput.addEventListener('change', calculateTotal);