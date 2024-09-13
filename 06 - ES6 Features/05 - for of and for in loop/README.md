# **`for...of` and `for...in` Loops in JavaScript**

Both `for...of` and `for...in` loops are used to iterate over elements or properties, but they serve different purposes. Understanding when to use each one is key to writing efficient JavaScript code.

---

### **1. `for...of` Loop**

The **`for...of`** loop was introduced in ES6 and is used to iterate over the **values** of an iterable object, such as arrays, strings, maps, sets, or any object that implements the iterable protocol.

#### **Syntax:**
```js
for (const element of iterable) {
  // code block to be executed
}
```

#### **Key Points:**
- Iterates over **values** (elements) of an iterable.
- Best used with arrays, strings, and other iterable collections.

#### **Example with Arrays:**
```js
const fruits = ['Apple', 'Banana', 'Mango'];

for (const fruit of fruits) {
  console.log(fruit); 
}
// Output:
// Apple
// Banana
// Mango
```

#### **Example with Strings:**
```js
const name = 'Raiyan';

for (const char of name) {
  console.log(char); 
}
// Output:
// R
// a
// i
// y
// a
// n
```

#### **Use Cases:**
- When you want to iterate over array elements or string characters.
- When working with iterable objects like Maps, Sets, etc.

---

### **2. `for...in` Loop**

The **`for...in`** loop is used to iterate over the **enumerable properties** of an object. It goes through the keys (property names) of an object or an array.

#### **Syntax:**
```js
for (const key in object) {
  // code block to be executed
}
```

#### **Key Points:**
- Iterates over **keys** (property names) in an object.
- Best used for objects, though it can technically be used on arrays (not recommended).
- Iterates over all enumerable properties, including inherited ones.

#### **Example with Objects:**
```js
const person = { name: 'Raiyan', age: 25, city: 'Dhaka' };

for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}
// Output:
// name: Raiyan
// age: 25
// city: Dhaka
```

#### **Example with Arrays:**
```js
const fruits = ['Apple', 'Banana', 'Mango'];

for (const index in fruits) {
  console.log(`${index}: ${fruits[index]}`);
}
// Output:
// 0: Apple
// 1: Banana
// 2: Mango
```

While `for...in` works on arrays, it is not recommended because it loops through property names (indexes), and arrays have a `length` property that may not be iterated properly in all cases. Use `for...of` for arrays.

#### **Use Cases:**
- When you want to iterate over an object’s properties.
- When working with non-iterable objects like plain JavaScript objects.

---

### **3. Differences Between `for...of` and `for...in`**

| Feature             | `for...of`                                    | `for...in`                                      |
|---------------------|-----------------------------------------------|-------------------------------------------------|
| **Iterates over**    | Values of an iterable (like arrays, strings)  | Keys (property names) of an object              |
| **Use with**         | Arrays, strings, sets, maps, iterables        | Objects, but can also be used with arrays (not recommended) |
| **Returns**          | Value of each element                        | Key or index of each element                    |
| **Inherited properties** | Skips inherited properties                  | Includes inherited properties                   |

---

### **4. Practical Examples**

#### **Example: Iterating Over a Map with `for...of`**
```js
const map = new Map([
  ['name', 'Raiyan'],
  ['age', 25],
  ['city', 'Dhaka']
]);

for (const [key, value] of map) {
  console.log(`${key}: ${value}`);
}
// Output:
// name: Raiyan
// age: 25
// city: Dhaka
```

#### **Example: Iterating Over an Object with `for...in`**
```js
const car = { brand: 'Toyota', model: 'Corolla', year: 2020 };

for (const key in car) {
  console.log(`${key}: ${car[key]}`);
}
// Output:
// brand: Toyota
// model: Corolla
// year: 2020
```

---

### **Summary:**

- **`for...of`** is used to iterate over **values** in iterable objects like arrays, strings, maps, and sets.
- **`for...in`** is used to iterate over **keys** (property names) in objects.
- Use **`for...of`** for arrays and other iterable collections.
- Use **`for...in`** for objects, especially when you need to access their keys or properties.