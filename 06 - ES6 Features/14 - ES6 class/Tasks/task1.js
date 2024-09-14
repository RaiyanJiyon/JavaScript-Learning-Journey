/*
Task 1: Create a Vehicle Class
Create a Vehicle class with the following properties and methods:
make (string), model (string), and year (number).
A method getDetails() that returns a string with the vehicle's details: "Make: [make], Model: [model], Year: [year]".
*/

class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getDetails() {
        return `Vehicle's Details: Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
    }
};

const vehicle1 = new Vehicle("Tesla", "Tesla 234", 2024);
console.log(vehicle1.getDetails());