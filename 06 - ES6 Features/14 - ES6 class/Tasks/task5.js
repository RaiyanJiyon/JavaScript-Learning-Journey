/*
Task 5: Getters and Setters for a Product Class
Create a Product class with properties name, price, and quantity.
Add getter and setter methods for the price property:
The getter should return the price formatted as "Price: $[price]".
The setter should allow updating the price but should log an error if a negative price is assigned.
Create a product instance, set a valid and invalid price, and log the output of the price getter.
*/

class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this._price = price;
        this.quantity = quantity;
    }

    get price() {
        return `Price: $${this._price}`;
    }

    set price(newPrice) {
        if (newPrice > 0) {
            this._price += newPrice;
        } else {
            console.log("Error: Price can't be a negative number");
        }
    }
}

const product1 = new Product("iPhone", 120000, 5);
console.log(product1.price);

product1.price = 90000;
console.log(product1.price);

product1.price = -90000;
console.log(product1.price);