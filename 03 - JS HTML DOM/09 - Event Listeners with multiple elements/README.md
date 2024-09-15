# Event Listeners with multiple elements

Attaching event listeners to multiple elements can be very useful when you want to apply the same behavior across different elements on a page. You can loop through a list of elements and add an event listener to each one. This can be done using methods like `querySelectorAll()` or `getElementsByClassName()` to select multiple elements and loop through them to attach the event listeners.

Here’s how you can attach event listeners to multiple elements:

### **Basic Syntax for Event Listeners on Multiple Elements:**
1. Select all elements using `document.querySelectorAll()` or `getElementsByClassName()`.
2. Loop through the selected elements using `forEach()` or a `for` loop.
3. Attach the event listener to each element.

### **Example:**
```js
const buttons = document.querySelectorAll('.myButton');

buttons.forEach(button => {
  button.addEventListener('click', function() {
    alert('Button clicked: ' + button.textContent);
  });
});
```