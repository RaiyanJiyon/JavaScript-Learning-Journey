In JavaScript, you can declare variables using three keywords: `var`, `let`, and `const`. Each of these keywords has different scoping rules and use cases. Here's how you can use each of them:

### 1. `var`
The `var` keyword is used to declare a variable. It has function scope, which means the variable is accessible within the function it is declared in, and it is also hoisted, meaning it can be used before it is declared.

```javascript
var x = 10;
console.log(x); // 10

function example() {
    var y = 20;
    console.log(y); // 20
}

example();
// console.log(y); // Uncaught ReferenceError: y is not defined
```

### 2. `let`
The `let` keyword is used to declare a block-scoped variable. It is only accessible within the block, statement, or expression where it is declared. Unlike `var`, `let` is not hoisted to the top of its block.

```javascript
let x = 10;
console.log(x); // 10

if (true) {
    let y = 20;
    console.log(y); // 20
}

// console.log(y); // Uncaught ReferenceError: y is not defined
```

### 3. `const`
The `const` keyword is used to declare a block-scoped, read-only constant. This means the value of a `const` variable cannot be changed through reassignment, and it cannot be redeclared. However, if the value is an object or array, the properties of the object or elements of the array can be changed.

```javascript
const x = 10;
console.log(x); // 10

// x = 20; // Uncaught TypeError: Assignment to constant variable.

if (true) {
    const y = 20;
    console.log(y); // 20
}

// console.log(y); // Uncaught ReferenceError: y is not defined

const obj = { name: "Alice" };
obj.name = "Bob"; // This is allowed
console.log(obj.name); // Bob
```

### Summary
- **`var`**: Function-scoped, can be redeclared and updated, hoisted.
- **`let`**: Block-scoped, can be updated but not redeclared in the same scope, not hoisted.
- **`const`**: Block-scoped, cannot be updated or redeclared, but object properties can be changed, not hoisted.

### Examples
Here's a complete example demonstrating the use of `var`, `let`, and `const`:

```javascript
// Using var
function varExample() {
    var message = "Hello, var!";
    console.log(message); // Hello, var!
    if (true) {
        var message = "Hello again, var!";
        console.log(message); // Hello again, var!
    }
    console.log(message); // Hello again, var!
}
varExample();

// Using let
function letExample() {
    let message = "Hello, let!";
    console.log(message); // Hello, let!
    if (true) {
        let message = "Hello again, let!";
        console.log(message); // Hello again, let!
    }
    console.log(message); // Hello, let!
}
letExample();

// Using const
function constExample() {
    const message = "Hello, const!";
    console.log(message); // Hello, const!
    if (true) {
        const message = "Hello again, const!";
        console.log(message); // Hello again, const!
    }
    console.log(message); // Hello, const!
}
constExample();
```

Choose the appropriate keyword based on the specific requirements of your code and the scoping rules you need.