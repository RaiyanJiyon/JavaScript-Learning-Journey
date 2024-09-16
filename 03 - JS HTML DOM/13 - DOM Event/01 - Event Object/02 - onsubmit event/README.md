# **`onsubmit` Event**

The **`onsubmit` event** occurs when a form is submitted, typically by clicking the submit button or pressing "Enter" inside a form field. It is commonly used to validate the form, process the input, or prevent the form from being submitted if the data does not meet certain criteria.

The `onsubmit` event is often handled using JavaScript to perform actions like:
- Form validation.
- Submitting the form data via AJAX (without refreshing the page).
- Preventing submission and providing feedback if necessary (using `event.preventDefault()`).

### **Example: Basic `onsubmit` Event Handler**

```html
<form id="myForm">
  <input type="text" name="username" required placeholder="Enter username">
  <button type="submit">Submit</button>
</form>
<p id="output"></p>

<script>
  const form = document.getElementById('myForm');
  const output = document.getElementById('output');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from being submitted
    const formData = new FormData(form); // Collect form data
    const username = formData.get('username');
    output.textContent = `Submitted username: ${username}`;
  });
</script>
```

### **Key Points**
- **`event.preventDefault()`**: Prevents the default action (form submission).
- **`new FormData(form)`**: Collects the data from the form fields.