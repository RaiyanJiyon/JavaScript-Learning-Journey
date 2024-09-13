# **Destructuring in JavaScript (ES6)**

**Destructuring** is a convenient way to unpack values from arrays or properties from objects into distinct variables. It simplifies the process of extracting multiple values from complex data structures.

---

### **1. Array Destructuring**

Array destructuring allows you to assign variables from array elements in a more readable and concise manner.

#### **Basic Syntax:**
```js
const [var1, var2] = array;
```

#### **Example 1: Basic Array Destructuring**
```js
const numbers = [1, 2, 3];
const [a, b, c] = numbers;

console.log(a);  // 1
console.log(b);  // 2
console.log(c);  // 3
```

#### **Example 2: Skipping Elements**
You can skip elements in the array by leaving the destructuring position blank.

```js
const numbers = [1, 2, 3, 4];
const [first, , third] = numbers;

console.log(first);  // 1
console.log(third);  // 3
```

#### **Example 3: Default Values in Array Destructuring**
If the array doesn't have enough elements, you can assign default values.

```js
const numbers = [1];
const [a, b = 10] = numbers;

console.log(a);  // 1
console.log(b);  // 10
```

#### **Example 4: Using Rest Operator with Array Destructuring**
You can capture the rest of the array into a new array using the **rest operator** (`...`).

```js
const numbers = [1, 2, 3, 4];
const [first, ...rest] = numbers;

console.log(first);  // 1
console.log(rest);   // [2, 3, 4]
```

---

### **2. Object Destructuring**

Object destructuring allows you to extract properties from objects and assign them to variables with matching names.

#### **Basic Syntax:**
```js
const { key1, key2 } = object;
```

#### **Example 1: Basic Object Destructuring**
```js
const person = { name: 'Alice', age: 25, city: 'New York' };
const { name, age } = person;

console.log(name);  // 'Alice'
console.log(age);   // 25
```

#### **Example 2: Assigning to New Variable Names**
You can assign properties to variables with different names.

```js
const person = { name: 'Alice', age: 25 };
const { name: fullName, age: years } = person;

console.log(fullName);  // 'Alice'
console.log(years);     // 25
```

#### **Example 3: Default Values in Object Destructuring**
You can set default values for properties that might not exist in the object.

```js
const person = { name: 'Alice' };
const { name, age = 30 } = person;

console.log(name);  // 'Alice'
console.log(age);   // 30
```

#### **Example 4: Nested Object Destructuring**
You can destructure properties from nested objects.

```js
const person = { name: 'Alice', address: { city: 'New York', country: 'USA' } };
const { address: { city, country } } = person;

console.log(city);    // 'New York'
console.log(country); // 'USA'
```

#### **Example 5: Rest Operator in Object Destructuring**
You can use the rest operator to capture the remaining properties in an object.

```js
const person = { name: 'Alice', age: 25, city: 'New York' };
const { name, ...rest } = person;

console.log(name);  // 'Alice'
console.log(rest);  // { age: 25, city: 'New York' }
```

---

### **3. Destructuring Function Parameters**

You can destructure arrays or objects directly in function parameters to make your code more concise.

#### **Example 1: Destructuring Array in Function Parameters**
```js
function sum([a, b]) {
  return a + b;
}

console.log(sum([3, 4]));  // 7
```

#### **Example 2: Destructuring Object in Function Parameters**
```js
function displayPerson({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}

const person = { name: 'Alice', age: 25 };
displayPerson(person);  // Name: Alice, Age: 25
```

---

### **4. Practical Examples**

#### **Example 1: Swapping Variables Using Array Destructuring**
You can use array destructuring to swap values between variables without needing a temporary variable.

```js
let a = 1, b = 2;
[a, b] = [b, a];

console.log(a);  // 2
console.log(b);  // 1
```

#### **Example 2: Extracting Data from API Response**
Destructuring is useful for extracting data from objects returned by APIs.

```js
const response = {
  status: 200,
  data: {
    user: { name: 'Alice', age: 25 },
    token: 'abc123'
  }
};

const { data: { user: { name, age }, token } } = response;

console.log(name);  // 'Alice'
console.log(age);   // 25
console.log(token); // 'abc123'
```

---

### **5. Summary**

- **Array Destructuring**: Extracts elements from arrays.
- **Object Destructuring**: Extracts properties from objects.
- **Default Values**: You can set default values when destructuring.
- **Rest Operator**: Captures remaining items or properties.
- **Function Parameters**: Use destructuring directly in function parameters for cleaner code.

Destructuring is a powerful feature in JavaScript that simplifies working with arrays and objects, making your code more readable and concise.