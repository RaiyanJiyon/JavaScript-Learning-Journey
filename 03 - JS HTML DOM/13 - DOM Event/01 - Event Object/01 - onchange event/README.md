# **`onchange` Event**

The **`onchange` event** is triggered when the value of an input element is changed and the element loses focus (i.e., the user moves away from the field after making changes). This event is commonly used with form elements like `<input>`, `<select>`, and `<textarea>`, but it can also be applied to other elements where the user can modify data.

### **Common Uses of `onchange`**
- **Text input fields**: Detecting when a user changes the text in an input field.
- **Dropdowns (`<select>`)**: Detecting when the user selects a different option.
- **Checkboxes**: Detecting when the state of a checkbox is changed.
  
### **Event Handler Example**
Here’s how you can listen for the `onchange` event and respond to it:

```html
<input type="text" id="myInput" placeholder="Type something">

<script>
  const inputElement = document.getElementById('myInput');
  
  inputElement.addEventListener('change', function(event) {
    console.log('Input changed to:', event.target.value);
  });
</script>
```

In this example:
- The input field listens for the `onchange` event.
- When the user changes the input and leaves the field, the new value is logged to the console.

### **Properties of the `onchange` Event Object**
- **`event.target`**: The element whose value was changed.
- **`event.type`**: The type of the event, which is `"change"`.
- **`event.preventDefault()`**: Can prevent default behavior if necessary (though rarely used in `onchange`).