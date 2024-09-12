# Variable and Function in ES6

In ES6, variables and functions were given several important updates, making them more flexible, readable, and powerful. Here’s an overview of how variables and functions work in ES6.

---

### **1. Variables in ES6**

In ES6, there are three ways to declare variables: `var`, `let`, and `const`. Each has its own scope and behavior.

#### **a) `var` (Function-Scoped Variable)**
- Before ES6, `var` was the only way to declare variables. 
- `var` is **function-scoped**, which means that it’s scoped to the function it’s declared in, or globally if declared outside a function.
- `var` declarations are **hoisted**, meaning the declaration is moved to the top of the scope, but not the assignment.

**Example:**
```js
var x = 10;

if (true) {
  var x = 20;
  console.log(x); // 20 (same variable, even outside the block)
}

console.log(x); // 20 (var is not block-scoped)
```

#### **b) `let` (Block-Scoped Variable)**
- `let` is **block-scoped**, meaning it is only accessible within the block it’s declared in (inside `{}`).
- Variables declared with `let` are not hoisted like `var`, and you cannot use them before declaration.
- `let` allows reassignment of values.

**Example:**
```js
let y = 10;

if (true) {
  let y = 20;  // Different variable, scoped to this block
  console.log(y); // 20
}

console.log(y); // 10 (the outer y is unchanged)
```

#### **c) `const` (Block-Scoped Constant)**
- `const` is also **block-scoped** like `let`, but the value it holds cannot be reassigned (although the value of objects and arrays can be modified).
- A variable declared with `const` must be initialized at the time of declaration.

**Example:**
```js
const z = 30;
// z = 40;  // Error: Assignment to constant variable

const person = { name: 'Raiyan' };
person.name = 'John'; // Allowed (object properties can be changed)
console.log(person.name); // "John"
```

---

### **2. Functions in ES6**

ES6 introduced several new ways to declare and work with functions, including **arrow functions**, **default parameters**, and **rest parameters**.

#### **a) Regular Function**
The traditional way to declare functions remains the same in ES6.

**Example:**
```js
function multiply(a, b) {
  return a * b;
}

console.log(multiply(3, 4)); // 12
```

#### **b) Arrow Functions**
Arrow functions are a shorter way to write function expressions. They also have **lexical `this` binding**, meaning they inherit the value of `this` from the surrounding code (unlike regular functions, which have their own `this`).

- **Single-line arrow function:**
  ```js
  const add = (a, b) => a + b;
  console.log(add(3, 4)); // 7
  ```

- **Multi-line arrow function:**
  ```js
  const square = (x) => {
    return x * x;
  };

  console.log(square(5)); // 25
  ```

- **Lexical `this` in arrow functions:**
  ```js
  const person = {
    name: 'Raiyan',
    sayName: function() {
      setTimeout(() => {
        console.log(this.name);  // Arrow function inherits `this` from sayName's scope
      }, 1000);
    }
  };

  person.sayName();  // "Raiyan"
  ```

#### **c) Default Parameters**
In ES6, functions can have default parameter values. If a parameter is not provided when the function is called, it will use the default value.

**Example:**
```js
function greet(name = 'Guest') {
  return `Hello, ${name}!`;
}

console.log(greet());        // "Hello, Guest!"
console.log(greet('Raiyan')); // "Hello, Raiyan!"
```

#### **d) Rest Parameters**
Rest parameters allow a function to accept an indefinite number of arguments as an array.

**Example:**
```js
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4)); // 10
```

#### **e) Spread Operator in Function Calls**
The spread operator can be used to pass an array as individual arguments to a function.

**Example:**
```js
const numbers = [1, 2, 3];
console.log(Math.max(...numbers));  // 3
```

---

### **Summary:**

#### **Variables:**
- **`var`:** Function-scoped, hoisted.
- **`let`:** Block-scoped, can be reassigned.
- **`const`:** Block-scoped, cannot be reassigned.

#### **Functions:**
- **Regular functions:** Traditional function declaration.
- **Arrow functions:** Shorter syntax, lexical `this` binding.
- **Default parameters:** Allow default values for function arguments.
- **Rest parameters:** Collects remaining arguments into an array.
- **Spread operator:** Spreads array elements into individual arguments.

These updates in ES6 have made JavaScript more flexible, concise, and easier to maintain.