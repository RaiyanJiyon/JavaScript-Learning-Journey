const cart = [
    { name: 'Shoes', price: 50, quantity: 2 },
    { name: 'Shirt', price: 20, quantity: 1 },
    { name: 'Hat', price: 15, quantity: 3 }
];

let sum = 0;

cart.forEach(element => {
    console.log(`${element.name}: ${element.quantity} x $${element.price}`);
    sum += element.price * element.quantity;
});
console.log(`Total Price: ${sum}`);