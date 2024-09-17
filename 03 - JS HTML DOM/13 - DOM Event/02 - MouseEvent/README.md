# Mouse event in JavaScript DOM

In JavaScript, **mouse events** are actions that can be detected when the user interacts with a webpage using the mouse. These events allow you to execute JavaScript functions in response to user interaction with elements in the Document Object Model (DOM). Common mouse events include clicks, hovering, dragging, etc.

Here are the most common mouse events in JavaScript:

1. **`click`**: Triggered when an element is clicked.
   ```javascript
   const button = document.querySelector('button');
   button.addEventListener('click', function() {
       console.log('Button clicked!');
   });
   ```

2. **`dblclick`**: Triggered when an element is double-clicked.
   ```javascript
   button.addEventListener('dblclick', function() {
       console.log('Button double-clicked!');
   });
   ```

3. **`mousedown`**: Triggered when the mouse button is pressed down on an element.
   ```javascript
   button.addEventListener('mousedown', function() {
       console.log('Mouse button pressed down!');
   });
   ```

4. **`mouseup`**: Triggered when the mouse button is released.
   ```javascript
   button.addEventListener('mouseup', function() {
       console.log('Mouse button released!');
   });
   ```

5. **`mouseenter`**: Triggered when the mouse enters an element's area (without any child elements triggering the event).
   ```javascript
   button.addEventListener('mouseenter', function() {
       console.log('Mouse entered the button!');
   });
   ```

6. **`mouseleave`**: Triggered when the mouse leaves the element's area (without any child elements triggering the event).
   ```javascript
   button.addEventListener('mouseleave', function() {
       console.log('Mouse left the button!');
   });
   ```

7. **`mousemove`**: Triggered every time the mouse moves over an element.
   ```javascript
   button.addEventListener('mousemove', function() {
       console.log('Mouse is moving over the button!');
   });
   ```

8. **`mouseover` and `mouseout`**: Similar to `mouseenter` and `mouseleave`, but the events are triggered for both the element and its child elements.
   ```javascript
   button.addEventListener('mouseover', function() {
       console.log('Mouse is over the button!');
   });

   button.addEventListener('mouseout', function() {
       console.log('Mouse is out of the button!');
   });
   ```

### Example: Moving a box with `mousemove` event
This example demonstrates how to use the `mousemove` event to track the mouse position and move an element accordingly.

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
        }
    </style>
</head>
<body>
    <div id="box"></div>

    <script>
        const box = document.getElementById('box');
        document.addEventListener('mousemove', function(event) {
            const x = event.clientX;
            const y = event.clientY;
            box.style.left = x + 'px';
            box.style.top = y + 'px';
        });
    </script>
</body>
</html>
```

In this code, the `mousemove` event is used to track the mouse's position, and the box is moved to follow the mouse pointer.