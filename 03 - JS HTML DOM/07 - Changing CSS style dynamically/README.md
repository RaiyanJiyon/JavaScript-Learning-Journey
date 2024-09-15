# Changing CSS style dynamically

To dynamically change CSS styles using JavaScript, you can modify the `style` property of DOM elements. Here are some common ways to achieve this:

1. **Using the `style` property**: You can directly set the inline style of an element by modifying its `style` attribute.
   ```js
   element.style.propertyName = value;
   ```
   Example:
   ```js
   document.getElementById('myDiv').style.backgroundColor = 'blue';
   ```

2. **Toggling CSS Classes**: You can add, remove, or toggle CSS classes to change styles dynamically.
   ```js
   element.classList.add('className');
   element.classList.remove('className');
   element.classList.toggle('className');
   ```