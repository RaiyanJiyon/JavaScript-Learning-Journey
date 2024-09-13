/*
Task 2: Filter Products and Adjust Prices
Filter out expensive products (price > 50) and apply a discount to the remaining ones.
*/

const products = [
    { name: 'Shoes', price: 80 },
    { name: 'T-shirt', price: 20 },
    { name: 'Jeans', price: 40 }
];

const discountedProduct = products
    .filter(product => product.price >= 50)
    .map(product => ({
        ...product,
        price: product.price * 0.9
    }));

console.log(discountedProduct);