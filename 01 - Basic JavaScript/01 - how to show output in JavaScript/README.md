# How To Show Output in JavaScript

In JavaScript, you can show output in various ways depending on the context in which you're working. Here are some common methods:

### 1. Using `console.log`
For debugging purposes or for outputting data to the browser's console:
```javascript
console.log("Hello, world!");
```

### 2. Using `alert`
To display a message in an alert dialog box:
```javascript
alert("Hello, world!");
```

### 3. Using `document.write`
To write directly to the HTML document (not recommended for modern web development):
```javascript
document.write("Hello, world!");
```

### 4. Manipulating the DOM
To show output by manipulating the DOM (preferred method for modern web development):
```html
<!DOCTYPE html>
<html>
<head>
    <title>Output in JavaScript</title>
</head>
<body>
    <div id="output"></div>

    <script>
        document.getElementById("output").innerText = "Hello, world!";
    </script>
</body>
</html>
```

### 5. Using `innerHTML` or `textContent`
To insert HTML or plain text into an element:
```javascript
document.getElementById("output").innerHTML = "<strong>Hello, world!</strong>";
// or
document.getElementById("output").textContent = "Hello, world!";
```

### 6. Using Console in Node.js
If you're working in a Node.js environment, you use `console.log` similarly to browser JavaScript:
```javascript
console.log("Hello, world!");
```

### Example: Full HTML Document
Here's a complete example of an HTML document showing various methods to display output:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Output in JavaScript</title>
</head>
<body>
    <div id="output"></div>

    <script>
        // Using console.log
        console.log("Hello, world!");

        // Using alert
        alert("Hello, world!");

        // Using document.write
        document.write("Hello, world!");

        // Using DOM manipulation
        document.getElementById("output").innerText = "Hello, world!";

        // Using innerHTML
        document.getElementById("output").innerHTML = "<strong>Hello, world!</strong>";
    </script>
</body>
</html>
```

Choose the method that best suits your needs and context. For web development, manipulating the DOM is generally the most effective and modern approach.