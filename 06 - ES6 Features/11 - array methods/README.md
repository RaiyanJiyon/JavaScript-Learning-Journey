# Array methods

JavaScript provides several powerful **array methods** that allow you to manipulate and work with arrays effectively. Here’s an overview of the most commonly used array methods, organized by categories:

---

### **1. Array Transformation Methods**

These methods create a new array or transform the elements of an array.

#### **`map()`**
Creates a new array by applying a function to each element in the array.
```js
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled);  // [2, 4, 6]
```

#### **`filter()`**
Creates a new array with elements that meet a specified condition (i.e., elements that return `true` from the function).
```js
const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens);  // [2, 4]
```

#### **`reduce()`**
Reduces an array to a single value by applying a function to each element and accumulating the result.
```js
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);  // 10
```

#### **`flat()`**
Flattens a nested array into a single-level array.
```js
const nested = [1, [2, 3], [4, [5]]];
const flatArray = nested.flat(2);  // Specify depth level to flatten.
console.log(flatArray);  // [1, 2, 3, 4, 5]
```

#### **`flatMap()`**
Combines `map()` and `flat()` in one step, mapping each element and then flattening the result.
```js
const arr = [1, 2, 3];
const mapped = arr.flatMap(num => [num, num * 2]);
console.log(mapped);  // [1, 2, 2, 4, 3, 6]
```

---

### **2. Array Access and Search Methods**

These methods allow you to search for elements or access specific ones.

#### **`find()`**
Returns the first element that satisfies the condition in the provided function. If none are found, it returns `undefined`.
```js
const users = [{ id: 1 }, { id: 2 }, { id: 3 }];
const user = users.find(user => user.id === 2);
console.log(user);  // { id: 2 }
```

#### **`findIndex()`**
Returns the index of the first element that satisfies the condition in the function. If none are found, it returns `-1`.
```js
const users = [{ id: 1 }, { id: 2 }, { id: 3 }];
const index = users.findIndex(user => user.id === 2);
console.log(index);  // 1
```

#### **`includes()`**
Checks if an array contains a specific value, returning `true` or `false`.
```js
const fruits = ['apple', 'banana', 'cherry'];
console.log(fruits.includes('banana'));  // true
```

#### **`indexOf()`**
Returns the index of the first occurrence of a specified element in an array, or `-1` if it is not found.
```js
const fruits = ['apple', 'banana', 'cherry'];
console.log(fruits.indexOf('banana'));  // 1
```

#### **`lastIndexOf()`**
Returns the index of the last occurrence of a specified element in an array, or `-1` if it is not found.
```js
const fruits = ['apple', 'banana', 'cherry', 'banana'];
console.log(fruits.lastIndexOf('banana'));  // 3
```

---

### **3. Array Modification Methods**

These methods change the original array.

#### **`push()`**
Adds one or more elements to the **end** of the array and returns the new length of the array.
```js
const numbers = [1, 2];
numbers.push(3);
console.log(numbers);  // [1, 2, 3]
```

#### **`pop()`**
Removes the last element from an array and returns that element.
```js
const numbers = [1, 2, 3];
const last = numbers.pop();
console.log(last);  // 3
console.log(numbers);  // [1, 2]
```

#### **`unshift()`**
Adds one or more elements to the **beginning** of the array and returns the new length of the array.
```js
const numbers = [2, 3];
numbers.unshift(1);
console.log(numbers);  // [1, 2, 3]
```

#### **`shift()`**
Removes the first element from an array and returns that element.
```js
const numbers = [1, 2, 3];
const first = numbers.shift();
console.log(first);  // 1
console.log(numbers);  // [2, 3]
```

#### **`splice()`**
Changes the content of an array by removing, replacing, or adding elements.
```js
const numbers = [1, 2, 3, 4];
numbers.splice(1, 2, 'a', 'b');
console.log(numbers);  // [1, 'a', 'b', 4]
```

#### **`reverse()`**
Reverses the order of the elements in an array.
```js
const numbers = [1, 2, 3];
numbers.reverse();
console.log(numbers);  // [3, 2, 1]
```

#### **`sort()`**
Sorts the elements of an array in place and returns the sorted array.
```js
const numbers = [3, 1, 2];
numbers.sort();
console.log(numbers);  // [1, 2, 3]
```

---

### **4. Array Iteration Methods**

These methods allow you to loop through arrays.

#### **`forEach()`**
Executes a function once for each element in the array.
```js
const fruits = ['apple', 'banana', 'cherry'];
fruits.forEach(fruit => console.log(fruit));
// Output: 'apple', 'banana', 'cherry'
```

#### **`some()`**
Checks if **at least one** element in the array passes the provided condition.
```js
const numbers = [1, 2, 3, 4];
const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven);  // true
```

#### **`every()`**
Checks if **all** elements in the array pass the provided condition.
```js
const numbers = [2, 4, 6];
const allEven = numbers.every(num => num % 2 === 0);
console.log(allEven);  // true
```

#### **`entries()`**
Returns an iterator object containing key/value pairs for each element in the array.
```js
const fruits = ['apple', 'banana', 'cherry'];
for (const [index, fruit] of fruits.entries()) {
  console.log(index, fruit);
}
// Output: 0 'apple', 1 'banana', 2 'cherry'
```

#### **`keys()`**
Returns an iterator object containing the keys (indexes) of each element in the array.
```js
const fruits = ['apple', 'banana', 'cherry'];
for (const key of fruits.keys()) {
  console.log(key);
}
// Output: 0, 1, 2
```

#### **`values()`**
Returns an iterator object containing the values of each element in the array.
```js
const fruits = ['apple', 'banana', 'cherry'];
for (const value of fruits.values()) {
  console.log(value);
}
// Output: 'apple', 'banana', 'cherry'
```

---

### **5. Array Conversion Methods**

These methods convert arrays into other data types.

#### **`join()`**
Converts all elements in the array into a string, separated by the specified separator.
```js
const fruits = ['apple', 'banana', 'cherry'];
const result = fruits.join(', ');
console.log(result);  // 'apple, banana, cherry'
```

#### **`toString()`**
Converts the array to a comma-separated string.
```js
const numbers = [1, 2, 3];
console.log(numbers.toString());  // '1,2,3'
```

---

### **Summary**

- **Transformation**: `map()`, `filter()`, `reduce()`, `flat()`, `flatMap()`
- **Search & Access**: `find()`, `findIndex()`, `includes()`, `indexOf()`, `lastIndexOf()`
- **Modification**: `push()`, `pop()`, `unshift()`, `shift()`, `splice()`, `reverse()`, `sort()`
- **Iteration**: `forEach()`, `some()`, `every()`, `entries()`, `keys()`, `values()`
- **Conversion**: `join()`, `toString()`

These methods are essential for working with arrays in JavaScript and help in making array operations concise and efficient.