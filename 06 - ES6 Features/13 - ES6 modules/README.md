# ES6 Modules

In **ES6**, JavaScript introduced the concept of **modules**, which allow developers to break their code into smaller, reusable pieces. The **module system** revolves around two main functionalities:

1. **Exporting** code from one module.
2. **Importing** that code into another module.

This structure helps to maintain clean and organized codebases by promoting modularity and reusability.

### **1. Exporting in ES6**

To make functions, variables, classes, or objects available for use in other files (modules), you need to **export** them.

#### **Named Exports**

With **named exports**, you explicitly define what you want to export from your module. Multiple exports can be made from the same file.

```js
// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
```

You can also define the functions or variables first, then export them:

```js
// math.js
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

export { multiply, divide };  // Named export
```

#### **Default Exports**

Each module can have **one default export**, which is often used for the main functionality of the module. It allows you to export a single value, such as a function, class, or object.

```js
// logger.js
export default function log(message) {
  console.log(message);
}
```

A default export does not need to be imported with curly braces and can be given any name when imported.

---

### **2. Importing in ES6**

To use the exported code from one module in another, you use the **import** statement.

#### **Importing Named Exports**

When importing named exports, you need to use the same name(s) as the export and wrap them in curly braces `{}`.

```js
// main.js
import { add, subtract } from './math.js';

console.log(add(3, 2));  // 5
console.log(subtract(5, 2));  // 3
```

You can also import everything from a module using `*` and give it an alias:

```js
// main.js
import * as math from './math.js';

console.log(math.add(3, 2));  // 5
console.log(math.subtract(5, 2));  // 3
```

#### **Importing Default Exports**

When importing a **default export**, you don’t need curly braces, and you can give it any name you like.

```js
// main.js
import log from './logger.js';

log('This is a message!');  // 'This is a message!'
```

You can import a **default export** and **named exports** from the same module:

```js
// main.js
import log, { add, subtract } from './mathAndLogger.js';

log('Math Operations:');
console.log(add(3, 2));  // 5
```

#### **Renaming Imports**

If there’s a naming conflict or you want to use a different name in your file, you can rename the imports using the `as` keyword.

```js
// main.js
import { add as sum, subtract as difference } from './math.js';

console.log(sum(3, 2));  // 5
console.log(difference(5, 2));  // 3
```

---

### **3. Combining Named and Default Exports**

You can mix both **named exports** and a **default export** in a module.

```js
// calculator.js
export default function calculator(a, b, operator) {
  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    default:
      return 0;
  }
}

export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
```

```js
// main.js
import calculator, { add, subtract } from './calculator.js';

console.log(calculator(3, 2, '+'));  // 5
console.log(add(4, 2));  // 6
```

---

### **4. Importing Without Exports (Side Effects)**

Sometimes you might want to import a module just to execute the code within it (for example, when the module has side effects such as polyfills, modifying prototypes, or setting up global configurations).

```js
// polyfill.js
import './polyfill.js';  // Just imports and runs the module without exporting anything
```

---

### **5. Re-exporting from Another Module**

A module can also re-export the exports of another module. This is useful when you want to create a central module that gathers exports from various modules.

```js
// utils.js
export { add, subtract } from './math.js';
export { log } from './logger.js';
```

Now you can import all the utilities from a single module:

```js
// main.js
import { add, log } from './utils.js';

log(add(5, 3));  // 8
```

---

### **6. Dynamic Imports (Importing Modules Asynchronously)**

Dynamic imports allow you to load modules at runtime, which is useful for **code-splitting** and **lazy-loading**.

```js
// main.js
const button = document.querySelector('#loadButton');
button.addEventListener('click', async () => {
  const { default: log } = await import('./logger.js');
  log('This is a dynamically imported message!');
});
```

Dynamic imports return a **Promise**, allowing you to load modules only when needed.

---

### **7. Advantages of ES6 Modules**

- **Modularity**: Organize code into reusable chunks.
- **Scope Management**: Avoid global scope pollution.
- **Maintainability**: Easier to maintain large codebases.
- **Reusability**: Import and use modules across multiple files and projects.

---

### **8. Browser and Node.js Support**

- In **modern browsers**, ES6 modules are supported natively using the `<script type="module">` tag.
  
  ```html
  <script type="module" src="main.js"></script>
  ```

- **Node.js** also supports ES6 modules, but you need to use the `.mjs` extension or add `"type": "module"` in your `package.json` file.

  ```json
  {
    "type": "module"
  }
  ```

---

### **Summary**

- **Named Exports**: Multiple exports per module, imported with the exact name or renamed.
- **Default Exports**: One per module, imported without curly braces, and can be named freely.
- **Re-exports**: Collect exports from multiple modules in one central place.
- **Dynamic Imports**: Load modules asynchronously at runtime for performance optimization.

ES6 modules are an integral part of modern JavaScript development, promoting clean, maintainable, and modular code.