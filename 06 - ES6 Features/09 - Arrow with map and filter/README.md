# Arrow with **`map()`** and **`filter()`** Functions

Using **arrow functions** with **`map()`** and **`filter()`** is a common and concise way to process arrays in JavaScript. Since arrow functions allow for shorter function syntax, they make operations like mapping or filtering arrays cleaner and more readable.

---

### **1. Using Arrow Functions with `map()`**

The **`map()`** method creates a new array by applying a function to each element in the original array. Arrow functions simplify the process of defining the transformation function.

#### **Example 1: Double Numbers with `map()` and Arrow Function**

```js
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);

console.log(doubled);  // [2, 4, 6, 8, 10]
```

Here, the arrow function `num => num * 2` takes each number in the array and returns its double. The result is a new array where all elements have been doubled.

#### **Example 2: Convert to Uppercase with `map()` and Arrow Function**

```js
const fruits = ['apple', 'banana', 'cherry'];
const uppercasedFruits = fruits.map(fruit => fruit.toUpperCase());

console.log(uppercasedFruits);  // ['APPLE', 'BANANA', 'CHERRY']
```

The arrow function `fruit => fruit.toUpperCase()` transforms each string in the array to uppercase.

---

### **2. Using Arrow Functions with `filter()`**

The **`filter()`** method creates a new array with only the elements that pass a given condition. Arrow functions can concisely define the condition.

#### **Example 1: Filter Even Numbers with `filter()` and Arrow Function**

```js
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers);  // [2, 4, 6]
```

The arrow function `num => num % 2 === 0` filters the array to include only even numbers.

#### **Example 2: Filter Strings that Start with 'A'**

```js
const fruits = ['apple', 'banana', 'avocado', 'cherry'];
const aFruits = fruits.filter(fruit => fruit.startsWith('a'));

console.log(aFruits);  // ['apple', 'avocado']
```

The arrow function `fruit => fruit.startsWith('a')` filters the array to include only fruits that start with the letter 'a'.

---

### **3. Combining `map()` and `filter()` with Arrow Functions**

You can combine `map()` and `filter()` together in a single operation using arrow functions for both.

#### **Example: Double Even Numbers**
First, filter out the even numbers, then double them using `map()`.

```js
const numbers = [1, 2, 3, 4, 5, 6];
const doubledEvens = numbers
  .filter(num => num % 2 === 0)
  .map(num => num * 2);

console.log(doubledEvens);  // [4, 8, 12]
```

In this example:
- **`filter(num => num % 2 === 0)`** filters for even numbers.
- **`map(num => num * 2)`** doubles the remaining numbers.

---

### **4. Practical Examples**

#### **Example 1: Extract Names of Adults**
Assume you have an array of people, and you want to extract only the names of people who are over 18.

```js
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 30 }
];

const adultNames = people
  .filter(person => person.age >= 18)
  .map(person => person.name);

console.log(adultNames);  // ['Alice', 'Charlie']
```

#### **Example 2: Filter Products and Adjust Prices**
Filter out expensive products (price > 50) and apply a discount to the remaining ones.

```js
const products = [
  { name: 'Shoes', price: 80 },
  { name: 'T-shirt', price: 20 },
  { name: 'Jeans', price: 40 }
];

const discountedProducts = products
  .filter(product => product.price <= 50)
  .map(product => ({
    ...product,
    price: product.price * 0.9  // 10% discount
  }));

console.log(discountedProducts);
// Output: [{ name: 'T-shirt', price: 18 }, { name: 'Jeans', price: 36 }]
```

---

### **Summary**
- **Arrow functions** simplify function syntax, making it easier to write concise `map()` and `filter()` operations.
- **`map()`**: Use with arrow functions to transform arrays.
- **`filter()`**: Use with arrow functions to filter arrays based on conditions.
- Arrow functions improve readability and reduce boilerplate code when working with arrays in JavaScript.