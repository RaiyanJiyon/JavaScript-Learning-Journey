# **`map()` and `filter()` Array Functions in JavaScript**

Both `map()` and `filter()` are powerful **array methods** that help in processing and transforming arrays in JavaScript. They allow for concise, readable operations on arrays without using traditional `for` loops.

---

### **1. `map()` Method**

The **`map()`** method creates a **new array** by applying a provided function to each element of the original array. It does not change the original array.

#### **Syntax:**
```js
const newArray = array.map(function(element, index, array) {
  // return new value for each element
});
```

#### **Key Points:**
- Applies a function to each element in the array.
- Returns a **new array** with the transformed elements.
- Does not mutate the original array.

#### **Example 1: Square Each Number**
```js
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num * 2);

console.log(squares);  // [2, 4, 6, 8, 10]
```

#### **Example 2: Convert Strings to Uppercase**
```js
const fruits = ['apple', 'banana', 'mango'];
const upperFruits = fruits.map(fruit => fruit.toUpperCase());

console.log(upperFruits);  // ['APPLE', 'BANANA', 'MANGO']
```

#### **Use Case:**
- When you need to transform each element of an array into something else (e.g., changing numbers, formatting data, converting cases).

---

### **2. `filter()` Method**

The **`filter()`** method creates a **new array** with all elements that pass the test implemented by the provided function. It returns only elements that satisfy the condition.

#### **Syntax:**
```js
const newArray = array.filter(function(element, index, array) {
  // return true or false
});
```

#### **Key Points:**
- Filters elements based on a condition.
- Returns a **new array** with elements that pass the test.
- Does not mutate the original array.

#### **Example 1: Filter Even Numbers**
```js
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers);  // [2, 4, 6]
```

#### **Example 2: Filter Fruits Starting with "A"**
```js
const fruits = ['apple', 'banana', 'mango', 'avocado'];
const aFruits = fruits.filter(fruit => fruit.startsWith('a'));

console.log(aFruits);  // ['apple', 'avocado']
```

#### **Use Case:**
- When you need to create a new array that only includes elements that satisfy certain criteria (e.g., filtering numbers, checking string conditions).

---

### **3. Combining `map()` and `filter()`**

You can chain `map()` and `filter()` together to first filter an array and then apply a transformation to the remaining elements.

#### **Example: Filter Even Numbers and Double Them**
```js
const numbers = [1, 2, 3, 4, 5, 6];
const doubledEvenNumbers = numbers
  .filter(num => num % 2 === 0)
  .map(num => num * 2);

console.log(doubledEvenNumbers);  // [4, 8, 12]
```

In this example:
- `filter()` first extracts the even numbers `[2, 4, 6]`.
- `map()` then doubles each of those numbers to get `[4, 8, 12]`.

---

### **4. Practical Examples**

#### **Example 1: Map an Array of Objects**
Let's say you have an array of users, and you want to create an array of their names using `map()`.

```js
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
];

const names = users.map(user => user.name);

console.log(names);  // ['Alice', 'Bob', 'Charlie']
```

#### **Example 2: Filter an Array of Objects**
You can filter out users above a certain age using `filter()`.

```js
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
];

const youngUsers = users.filter(user => user.age < 30);

console.log(youngUsers);
// Output: [{ name: 'Alice', age: 25 }]
```

#### **Example 3: Chain `filter()` and `map()`**
You can filter the users and then extract only their names.

```js
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
];

const youngUserNames = users
  .filter(user => user.age < 30)
  .map(user => user.name);

console.log(youngUserNames);  // ['Alice']
```

---

### **5. Comparison: `map()` vs. `filter()`**

| Feature            | `map()`                                 | `filter()`                             |
|--------------------|-----------------------------------------|----------------------------------------|
| **Purpose**        | Transforms each element in the array    | Filters elements based on a condition |
| **Returns**        | A new array with transformed elements   | A new array with elements that pass the test |
| **Original Array** | Does not modify                         | Does not modify                       |
| **Return Value**   | Transformed value for each element      | `true` or `false` to include/exclude elements |

---

### **6. Summary**

- **`map()`**: Use when you want to transform every element of an array into something new.
- **`filter()`**: Use when you want to extract specific elements from an array based on a condition.
- Both methods **return new arrays** and do not mutate the original array, making them ideal for functional programming.