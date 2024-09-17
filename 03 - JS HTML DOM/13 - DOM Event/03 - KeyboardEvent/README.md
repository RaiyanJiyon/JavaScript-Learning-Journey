# Keyboard Event in JavaScript DOM

In JavaScript, **keyboard events** are triggered when the user interacts with the keyboard. You can detect when a key is pressed, held down, or released. These events are useful for creating interactive features such as shortcuts, form validation, or even custom text input behaviors.

The main keyboard events are:

1. **`keydown`**: Triggered when a key is pressed down.
2. **`keypress`**: Triggered when a key is pressed down (deprecated in modern browsers; use `keydown` instead).
3. **`keyup`**: Triggered when a key is released.

### Common Keyboard Event Properties:
- **`event.key`**: Returns the value of the key pressed (e.g., 'a', 'Enter').
- **`event.code`**: Returns the physical key's code (e.g., 'KeyA', 'Enter').
- **`event.keyCode`**: Returns a numeric code for the key pressed (deprecated; `event.key` or `event.code` are preferred).
- **`event.shiftKey`**, **`event.ctrlKey`**, **`event.altKey`**, **`event.metaKey`**: Boolean properties that indicate if these modifier keys were pressed.

### Example 1: Detecting a key press
This example listens for the `keydown` event and logs the key pressed to the console.

```html
<!DOCTYPE html>
<html>
<body>
    <h1>Press any key!</h1>

    <script>
        document.addEventListener('keydown', function(event) {
            console.log('Key pressed:', event.key);
        });
    </script>
</body>
</html>
```
When a key is pressed, it will print the key value, like `a`, `Enter`, etc.

### Example 2: Handling `keyup` to perform actions
This example listens for the `keyup` event to perform an action when a specific key (e.g., the "Enter" key) is released.

```html
<!DOCTYPE html>
<html>
<body>
    <input type="text" id="inputField" placeholder="Type something and press Enter">

    <script>
        const inputField = document.getElementById('inputField');

        inputField.addEventListener('keyup', function(event) {
            // Check if the Enter key is released
            if (event.key === 'Enter') {
                alert('You pressed Enter!');
            }
        });
    </script>
</body>
</html>
```
Here, when the user presses the **Enter** key inside the input field, an alert will be shown.

### Example 3: Moving an element using arrow keys
This example demonstrates using keyboard events (specifically the arrow keys) to move an element on the screen.

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        #box {
            width: 100px;
            height: 100px;
            background-color: lightblue;
            position: absolute;
            left: 0;
            top: 0;
        }
    </style>
</head>
<body>
    <div id="box"></div>

    <script>
        const box = document.getElementById('box');
        let leftPosition = 0;
        let topPosition = 0;

        document.addEventListener('keydown', function(event) {
            switch (event.key) {
                case 'ArrowRight':
                    leftPosition += 10;
                    break;
                case 'ArrowLeft':
                    leftPosition -= 10;
                    break;
                case 'ArrowDown':
                    topPosition += 10;
                    break;
                case 'ArrowUp':
                    topPosition -= 10;
                    break;
            }
            box.style.left = leftPosition + 'px';
            box.style.top = topPosition + 'px';
        });
    </script>
</body>
</html>
```

In this example, pressing the **arrow keys** will move the box in the respective direction.

### Key Modifiers: Using `Ctrl`, `Shift`, `Alt`
You can detect if the user is holding down any modifier keys (like `Ctrl`, `Shift`, `Alt`, or `Meta`) while pressing another key. For example, this detects if the **Ctrl** key is pressed with the **S** key (a common shortcut for saving).

```javascript
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 's') {
        event.preventDefault(); // Prevent the default browser save behavior
        console.log('Ctrl + S pressed');
    }
});
```

In this example, when the user presses **Ctrl + S**, it will trigger the event, but it prevents the default browser behavior of trying to save the page.