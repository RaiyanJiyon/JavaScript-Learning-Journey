### **Task 5: Block Certain Key Presses**
1. Create an input field where the user can type text.
2. Block the user from typing certain keys (e.g., prevent the user from typing "a", "b", and "c").

**Requirements:**
- Use the `keydown` event to prevent the default action for specific keys.

```html
<input type="text" id="textInput" placeholder="Try typing 'a', 'b', or 'c'">

<script>
  const inputField = document.getElementById('textInput');

  inputField.addEventListener('keydown', function(event) {
    if (['a', 'b', 'c'].includes(event.key)) {
      event.preventDefault();
      alert(`The key "${event.key}" is blocked!`);
    }
  });
</script>
```

---

These tasks will help you master working with keypresses and keyboard events in the DOM, providing practical examples that handle user input in different ways. Let me know if you need further explanations!