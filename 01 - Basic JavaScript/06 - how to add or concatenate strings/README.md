In JavaScript, you can add or concatenate strings using several methods. Here are the most common ways to concatenate strings:

### 1. Using the `+` Operator
The `+` operator can be used to concatenate strings.

```javascript
let str1 = "Hello";
let str2 = "World";
let result = str1 + " " + str2;
console.log(result); // "Hello World"
```

### 2. Using the `+=` Operator
The `+=` operator appends a string to another string.

```javascript
let str1 = "Hello";
str1 += " World";
console.log(str1); // "Hello World"
```

### 3. Using Template Literals (ES6)
Template literals allow for string interpolation and multi-line strings using backticks (`` ` ``).

```javascript
let str1 = "Hello";
let str2 = "World";
let result = `${str1} ${str2}`;
console.log(result); // "Hello World"
```

### 4. Using `concat` Method
The `concat` method concatenates two or more strings.

```javascript
let str1 = "Hello";
let str2 = "World";
let result = str1.concat(" ", str2);
console.log(result); // "Hello World"
```

### 5. Using `join` Method with Arrays
You can use the `join` method to concatenate an array of strings.

```javascript
let strArray = ["Hello", "World"];
let result = strArray.join(" ");
console.log(result); // "Hello World"
```

### Examples
Here's a full example demonstrating each method:

```javascript
// Using the + operator
let hello = "Hello";
let world = "World";
let result1 = hello + " " + world;
console.log(result1); // "Hello World"

// Using the += operator
let greeting = "Hello";
greeting += " World";
console.log(greeting); // "Hello World"

// Using template literals
let str1 = "Hello";
let str2 = "World";
let result2 = `${str1} ${str2}`;
console.log(result2); // "Hello World"

// Using concat method
let part1 = "Hello";
let part2 = "World";
let result3 = part1.concat(" ", part2);
console.log(result3); // "Hello World"

// Using join method with arrays
let words = ["Hello", "World"];
let result4 = words.join(" ");
console.log(result4); // "Hello World"
```

### Summary
- The `+` operator is simple and effective for basic concatenation.
- The `+=` operator is useful for appending strings to existing variables.
- Template literals (`` ` ``) offer a modern and flexible way to concatenate and interpolate strings.
- The `concat` method is a more explicit way to concatenate multiple strings.
- The `join` method is useful when concatenating elements of an array with a specified separator.

Choose the method that best suits your needs and coding style. Template literals are highly recommended for readability and ease of use, especially when dealing with multiple variables or multi-line strings.