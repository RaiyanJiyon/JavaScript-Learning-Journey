# Event Listener

Event listeners in JavaScript allow you to set up functions to be called when a specified event occurs on a particular HTML element. Here's how you can work with event listeners in the DOM:

### Syntax
The most common method to add an event listener is by using the `addEventListener()` method.

```javascript
element.addEventListener(event, function, useCapture);
```

- **element**: The HTML element to attach the listener to.
- **event**: A string that specifies the name of the event (e.g., `click`, `mouseover`, `keydown`).
- **function**: The function to be executed when the event occurs.
- **useCapture**: Optional boolean indicating whether the event should be captured or bubbled.

### Example: Listening to a Click Event

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Event Listener Example</title>
</head>
<body>

<button id="myButton">Click Me</button>

<script>
  const button = document.getElementById('myButton');
  
  button.addEventListener('click', function() {
    alert('Button was clicked!');
  });
</script>

</body>
</html>
```

### Common Events

- **Mouse Events**: `click`, `dblclick`, `mouseenter`, `mouseleave`, `mousemove`
- **Keyboard Events**: `keydown`, `keypress`, `keyup`
- **Form Events**: `submit`, `focus`, `blur`, `input`, `change`
- **Window Events**: `load`, `resize`, `scroll`

### Removing Event Listeners
You can also remove an event listener using the `removeEventListener()` method:

```javascript
function myFunction() {
  console.log("This event listener will be removed!");
}

button.addEventListener('click', myFunction);

// Later in the code
button.removeEventListener('click', myFunction);
```