# String methods

JavaScript provides a rich set of string methods that make working with strings easier and more efficient. These methods allow you to manipulate, search, and format strings. Here’s a detailed overview of commonly used **string methods** in JavaScript:

---

### **1. String Length**

#### **`length`**
Returns the length of the string (i.e., the number of characters).

```js
const str = "Hello, World!";
console.log(str.length);  // 13
```

---

### **2. Accessing String Characters**

#### **`charAt()`**
Returns the character at the specified index.

```js
const str = "JavaScript";
console.log(str.charAt(0));  // 'J'
console.log(str.charAt(4));  // 'S'
```

#### **`charCodeAt()`**
Returns the Unicode (ASCII) value of the character at the specified index.

```js
const str = "ABC";
console.log(str.charCodeAt(0));  // 65 (Unicode for 'A')
```

#### **`at()`** (ES2022)
Returns the character at the specified index, supporting both positive and negative indices.

```js
const str = "JavaScript";
console.log(str.at(-1));  // 't' (last character)
```

---

### **3. String Case Methods**

#### **`toUpperCase()`**
Converts the string to uppercase.

```js
const str = "hello";
console.log(str.toUpperCase());  // 'HELLO'
```

#### **`toLowerCase()`**
Converts the string to lowercase.

```js
const str = "HELLO";
console.log(str.toLowerCase());  // 'hello'
```

---

### **4. Substring Methods**

#### **`slice()`**
Extracts a part of a string and returns it as a new string. It accepts start and optional end indices.

```js
const str = "JavaScript";
console.log(str.slice(0, 4));  // 'Java'
console.log(str.slice(4));     // 'Script' (from index 4 to end)
```

#### **`substring()`**
Similar to `slice()`, but does not accept negative indices.

```js
const str = "JavaScript";
console.log(str.substring(0, 4));  // 'Java'
console.log(str.substring(4));     // 'Script'
```

#### **`substr()`** (Deprecated)
Extracts a substring from the string, starting at a specific index and for a given number of characters.

```js
const str = "JavaScript";
console.log(str.substr(4, 6));  // 'Script'
```

---

### **5. Search and Replace Methods**

#### **`indexOf()`**
Returns the index of the first occurrence of a specified substring. Returns `-1` if not found.

```js
const str = "Hello, World!";
console.log(str.indexOf("World"));  // 7
console.log(str.indexOf("JavaScript"));  // -1
```

#### **`lastIndexOf()`**
Returns the index of the last occurrence of a specified substring.

```js
const str = "Hello, World! Hello!";
console.log(str.lastIndexOf("Hello"));  // 14
```

#### **`includes()`**
Checks if the string contains a specified substring, returning `true` or `false`.

```js
const str = "JavaScript is fun!";
console.log(str.includes("fun"));  // true
console.log(str.includes("hard")); // false
```

#### **`startsWith()`**
Checks if the string starts with a specified substring, returning `true` or `false`.

```js
const str = "JavaScript";
console.log(str.startsWith("Java"));  // true
```

#### **`endsWith()`**
Checks if the string ends with a specified substring, returning `true` or `false`.

```js
const str = "JavaScript";
console.log(str.endsWith("Script"));  // true
```

#### **`replace()`**
Replaces the first occurrence of a specified substring with another substring.

```js
const str = "Hello, World!";
const newStr = str.replace("World", "JavaScript");
console.log(newStr);  // 'Hello, JavaScript!'
```

#### **`replaceAll()`** (ES2021)
Replaces all occurrences of a specified substring with another substring.

```js
const str = "Hello, World! Hello, everyone!";
const newStr = str.replaceAll("Hello", "Hi");
console.log(newStr);  // 'Hi, World! Hi, everyone!'
```

---

### **6. String Splitting and Joining**

#### **`split()`**
Splits a string into an array of substrings based on a specified delimiter.

```js
const str = "apple,banana,cherry";
const fruits = str.split(",");
console.log(fruits);  // ['apple', 'banana', 'cherry']
```

#### **`join()`**
Converts an array of strings into a single string with a specified separator.

```js
const fruits = ['apple', 'banana', 'cherry'];
const str = fruits.join(", ");
console.log(str);  // 'apple, banana, cherry'
```

---

### **7. Trimming Methods**

#### **`trim()`**
Removes whitespace from both ends of the string.

```js
const str = "   Hello, World!   ";
console.log(str.trim());  // 'Hello, World!'
```

#### **`trimStart()` / `trimLeft()`**
Removes whitespace from the beginning of the string.

```js
const str = "   Hello!";
console.log(str.trimStart());  // 'Hello!'
```

#### **`trimEnd()` / `trimRight()`**
Removes whitespace from the end of the string.

```js
const str = "Hello!   ";
console.log(str.trimEnd());  // 'Hello!'
```

---

### **8. Repeating and Padding**

#### **`repeat()`**
Repeats the string a specified number of times.

```js
const str = "Hello!";
console.log(str.repeat(3));  // 'Hello!Hello!Hello!'
```

#### **`padStart()`**
Pads the string with another string (or spaces) at the beginning until it reaches a specified length.

```js
const str = "5";
console.log(str.padStart(3, '0'));  // '005'
```

#### **`padEnd()`**
Pads the string with another string (or spaces) at the end until it reaches a specified length.

```js
const str = "5";
console.log(str.padEnd(3, '0'));  // '500'
```

---

### **9. Other String Methods**

#### **`concat()`**
Concatenates two or more strings and returns a new string.

```js
const str1 = "Hello";
const str2 = "World";
const result = str1.concat(", ", str2);
console.log(result);  // 'Hello, World'
```

#### **`localeCompare()`**
Compares two strings based on the locale and returns a number indicating their order.

```js
const str1 = "apple";
const str2 = "banana";
console.log(str1.localeCompare(str2));  // -1 (str1 comes before str2)
```

---

### **10. Template Literals (ES6)**

Template literals (introduced in ES6) allow for easier string interpolation and multi-line strings using backticks (`` ` ``).

#### **Example: String Interpolation**
```js
const name = "Alice";
const greeting = `Hello, ${name}!`;
console.log(greeting);  // 'Hello, Alice!'
```

#### **Example: Multi-line Strings**
```js
const multiLine = `This is
a multi-line
string.`;
console.log(multiLine);
```

---

### **Summary**

- **Basic Access**: `length`, `charAt()`, `charCodeAt()`, `at()`
- **Case Conversion**: `toUpperCase()`, `toLowerCase()`
- **Substrings**: `slice()`, `substring()`, `substr()`
- **Search & Replace**: `indexOf()`, `lastIndexOf()`, `includes()`, `replace()`, `replaceAll()`
- **Split & Join**: `split()`, `join()`
- **Trim & Pad**: `trim()`, `trimStart()`, `trimEnd()`, `padStart()`, `padEnd()`
- **Others**: `concat()`, `repeat()`, `localeCompare()`, template literals

These string methods are essential for manipulating and working with text in JavaScript. Each of these methods has its use cases, making string operations simpler and more efficient.