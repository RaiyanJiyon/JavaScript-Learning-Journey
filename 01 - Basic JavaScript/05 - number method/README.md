In JavaScript, numbers come with several methods for formatting and manipulating their values. Two commonly used methods for formatting numbers are `toFixed` and `toPrecision`. Here's an explanation of each, along with examples.

### `toFixed`
The `toFixed` method formats a number using fixed-point notation. It returns a string representation of the number, rounded to the specified number of decimal places.

#### Syntax
```javascript
num.toFixed(digits)
```
- `digits`: The number of digits to appear after the decimal point. This is optional, and the default is 0.

#### Example
```javascript
let num = 123.456;

console.log(num.toFixed(2)); // "123.46"
console.log(num.toFixed(0)); // "123"
console.log(num.toFixed(5)); // "123.45600"
```

### `toPrecision`
The `toPrecision` method formats a number to a specified length. It returns a string representing the number to the specified precision (total number of significant digits).

#### Syntax
```javascript
num.toPrecision(precision)
```
- `precision`: The number of significant digits. This is optional, and if not specified, the method returns the same value as `num.toString()`.

#### Example
```javascript
let num = 123.456;

console.log(num.toPrecision(4)); // "123.5"
console.log(num.toPrecision(6)); // "123.456"
console.log(num.toPrecision(2)); // "1.2e+2"
```

### Comparison and Use Cases
- Use `toFixed` when you need to format a number to a specific number of decimal places. This is particularly useful for currency and other cases where a fixed number of decimal places is required.
- Use `toPrecision` when you need to control the total number of significant digits in the number. This is useful for scientific and precise calculations where the number of significant figures is important.

### Examples
Here are some examples to illustrate the differences between `toFixed` and `toPrecision`:

#### Example with `toFixed`
```javascript
let pi = 3.14159265359;

console.log(pi.toFixed(2)); // "3.14"
console.log(pi.toFixed(4)); // "3.1416"
console.log(pi.toFixed(0)); // "3"
```

#### Example with `toPrecision`
```javascript
let pi = 3.14159265359;

console.log(pi.toPrecision(2)); // "3.1"
console.log(pi.toPrecision(4)); // "3.142"
console.log(pi.toPrecision(6)); // "3.14159"
```

### Summary
- **`toFixed`**: Formats a number to a fixed number of decimal places.
- **`toPrecision`**: Formats a number to a specified number of significant digits.

Choose the method that best suits your formatting needs based on whether you need a fixed number of decimal places or a specific number of significant digits.