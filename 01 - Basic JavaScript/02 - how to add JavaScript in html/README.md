# How To Add JavaScript in HTML

Adding JavaScript to an HTML document can be done in several ways. Here are the common methods:

### 1. Inline JavaScript
You can add JavaScript directly within an HTML element using the `onclick`, `onload`, or other event attributes.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Inline JavaScript Example</title>
</head>
<body>
    <button onclick="alert('Hello, world!')">Click Me</button>
</body>
</html>
```

### 2. Internal JavaScript
You can include JavaScript within a `<script>` tag inside the HTML document, usually placed within the `<head>` or at the end of the `<body>` section.

#### In the `<head>` section:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Internal JavaScript Example</title>
    <script>
        function sayHello() {
            alert("Hello, world!");
        }
    </script>
</head>
<body>
    <button onclick="sayHello()">Click Me</button>
</body>
</html>
```

#### At the end of the `<body>` section (recommended for better performance):
```html
<!DOCTYPE html>
<html>
<head>
    <title>Internal JavaScript Example</title>
</head>
<body>
    <button onclick="sayHello()">Click Me</button>

    <script>
        function sayHello() {
            alert("Hello, world!");
        }
    </script>
</body>
</html>
```

### 3. External JavaScript
You can include JavaScript from an external file using the `<script>` tag with a `src` attribute. This is the preferred method for separating HTML and JavaScript code.

#### HTML file (`index.html`):
```html
<!DOCTYPE html>
<html>
<head>
    <title>External JavaScript Example</title>
    <script src="script.js"></script>
</head>
<body>
    <button onclick="sayHello()">Click Me</button>
</body>
</html>
```

#### External JavaScript file (`script.js`):
```javascript
function sayHello() {
    alert("Hello, world!");
}
```

### Summary
- **Inline JavaScript**: Quick and easy, but not recommended for larger scripts.
- **Internal JavaScript**: Useful for scripts that are specific to a single HTML document.
- **External JavaScript**: Best practice for larger projects, keeps HTML and JavaScript separate, and allows for reusability and better organization.

Choose the method that best suits your needs based on the complexity and size of your project.