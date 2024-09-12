# Default and Rest Parameter

### **1. Default Parameters**

Default parameters in ES6 allow you to specify default values for function parameters. If no value or `undefined` is passed for a parameter, the default value is used.

#### **Syntax:**
```js
function functionName(param1 = defaultValue1, param2 = defaultValue2) {
  // function body
}
```

#### **Example:**
```js
function greet(name = 'Guest', greeting = 'Hello') {
  return `${greeting}, ${name}!`;
}

console.log(greet());                  // "Hello, Guest!"
console.log(greet('Raiyan'));           // "Hello, Raiyan!"
console.log(greet('Raiyan', 'Welcome')); // "Welcome, Raiyan!"
```

In this example, if the `name` or `greeting` is not provided, the function will use the default values of `"Guest"` and `"Hello"`, respectively.

#### **Key Points:**
- Default values are only used if no value or `undefined` is passed as an argument.
- Default parameters can also use previous parameters in their default value expressions.

```js
function add(a = 0, b = a) {
  return a + b;
}

console.log(add());       // 0 (both a and b default to 0)
console.log(add(5));      // 10 (b defaults to the value of a)
```

---

### **2. Rest Parameters**

Rest parameters allow you to accept an indefinite number of arguments as an array. This is useful when you want to handle multiple arguments without knowing exactly how many will be passed.

#### **Syntax:**
```js
function functionName(...restParam) {
  // function body
}
```

#### **Example:**
```js
function sum(...numbers) {
  return numbers.reduce((acc, current) => acc + current, 0);
}

console.log(sum(1, 2, 3));      // 6
console.log(sum(4, 5, 6, 7));   // 22
```

In this example, `sum` takes any number of arguments and adds them together. The `numbers` parameter collects all arguments passed to the function into an array.

#### **Key Points:**
- The rest parameter **must be the last parameter** in the function signature.
- The rest parameter gathers all the "rest" of the arguments into an array, which can be processed like a regular array.

```js
function displayNames(first, ...others) {
  console.log('First:', first);
  console.log('Others:', others);
}

displayNames('Raiyan', 'John', 'Jane'); 
// First: Raiyan
// Others: ['John', 'Jane']
```

In this example, the first argument is assigned to the `first` parameter, and the remaining arguments are collected into the `others` array.

---

### **Differences Between Default and Rest Parameters:**
- **Default Parameters**: Allow you to assign a default value to a parameter if no argument is provided for it.
- **Rest Parameters**: Gather all remaining arguments into an array when the number of arguments is uncertain.

### **Combined Usage:**
You can use both default and rest parameters in a single function, but the rest parameter must be placed last.

#### **Example:**
```js
function greet(greeting = 'Hello', ...names) {
  return `${greeting}, ${names.join(', ')}!`;
}

console.log(greet('Hi', 'Raiyan', 'John', 'Jane')); // "Hi, Raiyan, John, Jane!"
console.log(greet());                               // "Hello, !"
```

Here, `greeting` has a default value, and `names` captures all additional arguments.