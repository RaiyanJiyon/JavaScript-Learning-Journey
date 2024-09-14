# ES6 class

In **ES6**, classes were introduced to provide a simpler and more intuitive syntax for creating objects and managing inheritance in JavaScript. While JavaScript has always been prototype-based, ES6 classes offer a more structured way to define and work with object-oriented programming principles, like inheritance, encapsulation, and methods.

### **1. Defining a Class**
A class is defined using the `class` keyword, followed by the class name, which is typically capitalized.

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

const person1 = new Person('Alice', 30);
person1.greet();  // Output: Hello, my name is Alice and I'm 30 years old.
```

- **Constructor**: The `constructor()` method is called when a new instance of the class is created. It initializes the object with any passed arguments.
- **Methods**: Functions inside classes are defined without the `function` keyword. These are added to the class's prototype and can be called on instances.

---

### **2. Inheritance**

You can create a class that extends another class using the `extends` keyword. The child class can inherit properties and methods from the parent class.

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog1 = new Dog('Rex');
dog1.speak();  // Output: Rex barks.
```

- **`extends`**: This keyword allows a class to inherit from another class.
- **Overriding Methods**: Child classes can override methods of the parent class by defining a method with the same name.

---

### **3. `super` Keyword**

The `super()` function is used to call the parent class's constructor or methods inside the child class.

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);  // Calls the constructor of the parent class
    this.breed = breed;
  }

  speak() {
    super.speak();  // Calls the speak method from the parent class
    console.log(`${this.name} is a ${this.breed} and barks.`);
  }
}

const dog2 = new Dog('Buddy', 'Golden Retriever');
dog2.speak();  
// Output:
// Buddy makes a noise.
// Buddy is a Golden Retriever and barks.
```

- **`super()` in constructor**: When a child class has its own constructor, `super()` must be called before accessing `this`, as it calls the parent class's constructor.
- **`super.method()`**: Inside a method, `super` can be used to call methods from the parent class.

---

### **4. Getters and Setters**

Classes can have **getter** and **setter** methods, which allow controlled access to properties.

```js
class Person {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name.toUpperCase();
  }

  set name(newName) {
    this._name = newName;
  }
}

const person2 = new Person('Bob');
console.log(person2.name);  // Output: BOB

person2.name = 'Charlie';
console.log(person2.name);  // Output: CHARLIE
```

- **Getter**: Defined using `get` to return a property. It is accessed like a regular property but behaves like a method.
- **Setter**: Defined using `set` to modify a property. It allows custom logic when assigning a value to a property.

---

### **5. Static Methods**

Static methods are methods that belong to the class itself, rather than an instance of the class. These methods are called on the class directly.

```js
class MathUtils {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtils.add(5, 10));  // Output: 15
```

- **`static`**: This keyword defines a static method. Static methods cannot be called on instances of the class but are called on the class itself.

---

### **6. Class Fields (Instance and Static Fields)**

In recent versions of JavaScript, you can define fields (properties) outside the constructor for both instances and the class itself.

#### **Instance Fields**
```js
class Car {
  color = 'red';  // Default instance field

  constructor(model) {
    this.model = model;
  }
}

const car1 = new Car('Toyota');
console.log(car1.color);  // Output: red
```

#### **Static Fields**
```js
class Car {
  static wheels = 4;  // Static field

  constructor(model) {
    this.model = model;
  }
}

console.log(Car.wheels);  // Output: 4
```

---

### **7. Private Fields and Methods (ES2022)**

JavaScript now supports **private fields** and methods, which are not accessible outside the class. These are defined using the `#` symbol.

```js
class BankAccount {
  #balance = 0;  // Private field

  deposit(amount) {
    this.#balance += amount;
    console.log(`Deposited: $${amount}. New Balance: $${this.#balance}`);
  }

  #calculateInterest() {  // Private method
    return this.#balance * 0.05;
  }
}

const account = new BankAccount();
account.deposit(100);  // Output: Deposited: $100. New Balance: $100
// account.#balance  // Error: Private field '#balance' must be declared in an enclosing class
```

Private fields and methods can only be accessed within the class, improving encapsulation.

---

### **8. Example: Simple ES6 Class**

Here's a full example of a class representing a **Book** object, with public and private properties:

```js
class Book {
  #author;  // Private field

  constructor(title, author, pages) {
    this.title = title;
    this.#author = author;
    this.pages = pages;
  }

  getSummary() {
    return `${this.title} by ${this.#author}, ${this.pages} pages.`;
  }

  // Static method
  static comparePages(book1, book2) {
    return book1.pages - book2.pages;
  }
}

const book1 = new Book('1984', 'George Orwell', 328);
const book2 = new Book('Animal Farm', 'George Orwell', 112);

console.log(book1.getSummary());  // Output: 1984 by George Orwell, 328 pages.
console.log(Book.comparePages(book1, book2));  // Output: 216
```

---

### **Summary**

- **`class`** keyword: Used to define a class.
- **Constructor**: The `constructor()` method initializes an object when it's instantiated.
- **Inheritance**: Use `extends` to inherit from other classes.
- **`super`**: Calls the parent class’s constructor or methods.
- **Static methods**: Belong to the class and are called on the class, not instances.
- **Getters and Setters**: Allow controlled access to object properties.
- **Private fields/methods**: Encapsulate properties and methods that shouldn't be exposed.

Classes in ES6 offer a more structured and readable way of writing object-oriented code in JavaScript, making it easier to work with objects, inheritance, and encapsulation.