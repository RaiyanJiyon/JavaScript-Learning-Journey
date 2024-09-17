# Focus Event in JavaScript DOM

In JavaScript, **focus events** are triggered when elements, particularly form elements, gain or lose focus. Focus events are useful for validating inputs, providing user feedback, or performing actions when an element receives or loses attention.

The main focus events are:

1. **`focus`**: Triggered when an element gains focus. It does not bubble (i.e., it won't propagate up through the DOM).
2. **`blur`**: Triggered when an element loses focus. It also does not bubble.
3. **`focusin`**: Similar to `focus`, but it does bubble.
4. **`focusout`**: Similar to `blur`, but it does bubble.

These events are commonly used on input elements like `<input>`, `<textarea>`, or any element that can be focused.

### Example 1: Using `focus` and `blur` on an input field
This example listens for when an input field gains and loses focus, changing the border color as visual feedback.

```html
<!DOCTYPE html>
<html>
<body>
    <input type="text" id="nameInput" placeholder="Enter your name">

    <script>
        const nameInput = document.getElementById('nameInput');

        nameInput.addEventListener('focus', function() {
            nameInput.style.border = '2px solid green';
        });

        nameInput.addEventListener('blur', function() {
            nameInput.style.border = '2px solid red';
        });
    </script>
</body>
</html>
```
When the input field gains focus (when you click on it), the border color changes to green. When it loses focus (clicking elsewhere), the border turns red.

### Example 2: Using `focusin` and `focusout`
This example listens for `focusin` and `focusout` events to show how these events can bubble up to parent elements.

```html
<!DOCTYPE html>
<html>
<body>
    <div id="formContainer">
        <input type="text" id="emailInput" placeholder="Enter your email">
        <input type="password" id="passwordInput" placeholder="Enter your password">
    </div>

    <script>
        const formContainer = document.getElementById('formContainer');

        formContainer.addEventListener('focusin', function(event) {
            console.log(event.target.id + ' gained focus');
        });

        formContainer.addEventListener('focusout', function(event) {
            console.log(event.target.id + ' lost focus');
        });
    </script>
</body>
</html>
```
In this example, when an input field inside the `formContainer` gains or loses focus, it logs the action. The `focusin` and `focusout` events bubble up to the parent `formContainer` div.

### Example 3: Automatically focusing an input on page load
You can use the `focus()` method to automatically give focus to an element, such as an input field, when the page loads.

```html
<!DOCTYPE html>
<html>
<body>
    <input type="text" id="autoFocusInput" placeholder="This field will be focused automatically">

    <script>
        window.onload = function() {
            document.getElementById('autoFocusInput').focus();
        };
    </script>
</body>
</html>
```
When the page loads, the input field will automatically be focused.

### Example 4: Validating an input field when it loses focus
This example uses the `blur` event to validate an email input when it loses focus (i.e., when the user clicks outside the input).

```html
<!DOCTYPE html>
<html>
<body>
    <input type="email" id="emailInput" placeholder="Enter your email">
    <p id="error"></p>

    <script>
        const emailInput = document.getElementById('emailInput');
        const errorMessage = document.getElementById('error');

        emailInput.addEventListener('blur', function() {
            const email = emailInput.value;
            if (!email.includes('@')) {
                errorMessage.textContent = 'Please enter a valid email address.';
            } else {
                errorMessage.textContent = '';
            }
        });
    </script>
</body>
</html>
```
In this example, when the user clicks outside the email input (triggering `blur`), it checks if the email contains an `@` symbol. If not, an error message is displayed.

### Key Points:
- **`focus` and `blur`**: These events do not bubble up the DOM tree, so they can only be handled on the element itself.
- **`focusin` and `focusout`**: These events bubble, meaning they propagate upwards and can be handled by parent elements.
- **`focus()` method**: Can be used to programmatically focus on an element.

Focus events are highly useful for form validation, managing user experience, and creating interactive and accessible web forms.