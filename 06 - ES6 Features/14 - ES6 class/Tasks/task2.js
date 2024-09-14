/*
Task 2: Inheritance - Animal Class
Create an Animal class with a name and sound property, and a makeSound() method that logs the animal's sound.
Create a Dog class that extends Animal and overrides the makeSound() method to log "Dog says: [sound]".
Create instances of both Animal and Dog classes and call their makeSound() methods.
*/

class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }

    makeSound() {
        console.log(this.sound);
    }
}

class Dog extends Animal {
    makeSound() {
        console.log(`Dog says: ${this.sound}`);
    }
}

const animal = new Animal('Tom', 'Burg Burg');
animal.makeSound();

const dog = new Dog('Puppy', 'Woolf Woolf');
dog.makeSound();