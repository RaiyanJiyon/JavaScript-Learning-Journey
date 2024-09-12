# ES6 Features

ES6 (ECMAScript 2015) introduced several new features and improvements to JavaScript, which have made the language more powerful, readable, and easier to work with. Here’s an overview of some key ES6 features:

### 1. **Let and Const**
ES6 introduced `let` and `const` for block-scoped variables, replacing `var` in many cases.

- **`let`** allows you to declare variables that are block-scoped and can be reassigned.
- **`const`** declares block-scoped constants that cannot be reassigned.

**Example:**
```js
let x = 10;
x = 20; // Allowed

const y = 30;
// y = 40; // Error: Assignment to constant variable
```

### 2. **Arrow Functions**
Arrow functions provide a shorter syntax for writing function expressions and have lexical `this` binding.

**Example:**
```js
// Regular function
function add(a, b) {
  return a + b;
}

// Arrow function
const addArrow = (a, b) => a + b;

console.log(add(5, 10));       // 15
console.log(addArrow(5, 10));  // 15
```

### 3. **Template Literals**
Template literals (using backticks `` ` ``) allow for easier string interpolation and multi-line strings.

**Example:**
```js
const name = 'Raiyan';
const greeting = `Hello, ${name}! Welcome to ES6.`;

console.log(greeting); // "Hello, Raiyan! Welcome to ES6."
```

### 4. **Default Parameters**
You can now assign default values to function parameters, which are used when no argument is provided.

**Example:**
```js
function greet(name = 'Guest') {
  return `Hello, ${name}!`;
}

console.log(greet());         // "Hello, Guest!"
console.log(greet('Raiyan')); // "Hello, Raiyan!"
```

### 5. **Destructuring Assignment**
Destructuring allows you to extract values from arrays or properties from objects into distinct variables.

- **Array Destructuring:**
  ```js
  const [a, b] = [1, 2];
  console.log(a); // 1
  console.log(b); // 2
  ```

- **Object Destructuring:**
  ```js
  const person = { name: 'Raiyan', age: 25 };
  const { name, age } = person;
  console.log(name); // "Raiyan"
  console.log(age);  // 25
  ```

### 6. **Spread and Rest Operators (`...`)**
The spread operator allows elements of an array or object to be expanded into individual elements. The rest operator collects remaining elements into an array.

- **Spread Operator:**
  ```js
  const arr = [1, 2, 3];
  const newArr = [...arr, 4, 5];
  console.log(newArr); // [1, 2, 3, 4, 5]

  const obj = { a: 1, b: 2 };
  const newObj = { ...obj, c: 3 };
  console.log(newObj); // { a: 1, b: 2, c: 3 }
  ```

- **Rest Operator:**
  ```js
  function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }

  console.log(sum(1, 2, 3, 4)); // 10
  ```

### 7. **Classes**
ES6 introduced `class` syntax as a simpler way to create objects and handle inheritance in JavaScript.

**Example:**
```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

const person = new Person('Raiyan', 25);
console.log(person.greet()); // "Hello, my name is Raiyan and I am 25 years old."
```

### 8. **Modules (import/export)**
ES6 introduced a standard module system, allowing you to import and export code between different files.

- **Exporting:**
  ```js
  // utils.js
  export function add(a, b) {
    return a + b;
  }
  ```

- **Importing:**
  ```js
  // main.js
  import { add } from './utils.js';
  console.log(add(3, 4)); // 7
  ```

### 9. **Promises**
ES6 introduced Promises to handle asynchronous operations, providing better ways to manage callbacks.

**Example:**
```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Success!');
  }, 1000);
});

promise
  .then(result => console.log(result)) // "Success!" after 1 second
  .catch(error => console.error(error));
```

### 10. **Enhanced Object Literals**
ES6 added shorthand property names and methods for object literals, making object creation more concise.

**Example:**
```js
const name = 'Raiyan';
const age = 25;

const person = {
  name,
  age,
  greet() {
    return `Hello, I'm ${this.name}`;
  }
};

console.log(person.greet()); // "Hello, I'm Raiyan"
```

### 11. **For...of Loop**
The `for...of` loop is a new way to iterate over iterable objects (like arrays, strings, etc.).

**Example:**
```js
const arr = [1, 2, 3];
for (const value of arr) {
  console.log(value); // 1, 2, 3
}
```

### 12. **Map and Set**
ES6 introduced new data structures, `Map` and `Set`, for storing key-value pairs and unique values, respectively.

- **Map:**
  ```js
  const map = new Map();
  map.set('name', 'Raiyan');
  console.log(map.get('name')); // "Raiyan"
  ```

- **Set:**
  ```js
  const set = new Set([1, 2, 3, 1]);
  console.log(set); // Set { 1, 2, 3 }
  ```

### Summary of Key ES6 Features:
- `let` and `const` for block-scoped variables.
- Arrow functions for concise syntax and lexical `this`.
- Template literals for string interpolation.
- Default parameters for functions.
- Destructuring assignment for easier value extraction.
- Spread and rest operators for working with arrays and objects.
- Class-based syntax for object-oriented programming.
- Modules for organizing code across files.
- Promises for handling asynchronous operations.
- Enhanced object literals for easier object creation.
- `for...of` loop for iterating over iterables.
- New data structures: `Map` and `Set`.

These features significantly improve the way JavaScript code is written and managed. They make the code more concise, easier to understand, and more maintainable.