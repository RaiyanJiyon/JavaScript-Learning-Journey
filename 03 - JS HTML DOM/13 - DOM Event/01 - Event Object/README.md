# Event Object

The **Event Object** in JavaScript is an object automatically created by the browser when an event is triggered (like `click`, `change`, `submit`, etc.). It contains information about the event and methods for preventing or controlling the event's behavior.

### **Understanding Event Object Properties and Methods**
- **Properties**: These provide details about the event (e.g., `event.type`, `event.target`).
- **Methods**: Functions like `event.preventDefault()` and `event.stopPropagation()` allow you to modify how the event is handled.

---

## **1. `onchange` Event**

The `onchange` event occurs when the value of an input field changes and the user moves away from the input (focus is lost). It is often used in `<input>`, `<select>`, and `<textarea>` elements.

### **Example: Handling `onchange` Event**

```html
<select id="mySelect">
  <option value="apple">Apple</option>
  <option value="banana">Banana</option>
  <option value="cherry">Cherry</option>
</select>
<p>You selected: <span id="output"></span></p>

<script>
  const selectElement = document.getElementById('mySelect');
  const outputElement = document.getElementById('output');

  selectElement.addEventListener('change', function(event) {
    outputElement.textContent = event.target.value; // Get the selected value
  });
</script>
```

In this example:
- `event.target.value` retrieves the value selected from the dropdown list.

### **Properties of `onchange` Event**
- **`event.target`**: The element whose value has changed.
- **`event.type`**: The type of the event, which will be `"change"`.

---

## **2. `onsubmit` Event**

The `onsubmit` event occurs when a form is submitted. It’s typically used to validate the form data or prevent the default submission behavior.

### **Example: Handling `onsubmit` Event**

```html
<form id="myForm">
  <input type="text" name="username" required placeholder="Enter username">
  <button type="submit">Submit</button>
</form>
<p id="formOutput"></p>

<script>
  const form = document.getElementById('myForm');
  const output = document.getElementById('formOutput');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    output.textContent = `Form submitted with username: ${form.username.value}`;
  });
</script>
```

In this example:
- `event.preventDefault()` prevents the default form submission behavior.
- `form.username.value` retrieves the value entered in the input field.

### **Properties of `onsubmit` Event**
- **`event.target`**: The form element that triggered the submission.
- **`event.type`**: The type of the event, which will be `"submit"`.

---

## **3. Media Events (e.g., `onplay`, `onpause`, `onvolumechange`)**

Media events occur when actions are taken on media elements like `<audio>` or `<video>` (e.g., play, pause, volume change).

### **Example: Handling `onplay` and `onpause` Events**

```html
<video id="myVideo" width="300" controls>
  <source src="movie.mp4" type="video/mp4">
</video>
<p id="videoStatus">Status: Not Playing</p>

<script>
  const videoElement = document.getElementById('myVideo');
  const statusElement = document.getElementById('videoStatus');

  videoElement.addEventListener('play', function() {
    statusElement.textContent = 'Status: Playing';
  });

  videoElement.addEventListener('pause', function() {
    statusElement.textContent = 'Status: Paused';
  });
</script>
```

In this example:
- The event listeners detect when the video starts playing (`onplay`) and when it pauses (`onpause`).
  
### **Properties of Media Events**
- **`event.target`**: The media element that is being interacted with.
- **`event.type`**: The type of the event (e.g., `"play"`, `"pause"`).

---

## **4. `onscroll` Event**

The `onscroll` event occurs when an element or the entire page is scrolled.

### **Example: Handling `onscroll` Event**

```html
<div id="scrollableDiv" style="width: 200px; height: 100px; overflow: auto; border: 1px solid black;">
  <p>Scroll inside this box to trigger the event!</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  <p>Proin vitae tortor non nunc gravida vehicula.</p>
</div>
<p>Scroll Position: <span id="scrollPosition"></span></p>

<script>
  const scrollableDiv = document.getElementById('scrollableDiv');
  const scrollPosition = document.getElementById('scrollPosition');

  scrollableDiv.addEventListener('scroll', function() {
    scrollPosition.textContent = scrollableDiv.scrollTop; // Get the vertical scroll position
  });
</script>
```

In this example:
- `scrollableDiv.scrollTop` gives the vertical scroll position of the `div`.

### **Properties of `onscroll` Event**
- **`event.target`**: The element being scrolled.
- **`event.type`**: The type of the event, which will be `"scroll"`.

---

## **5. `onresize` Event**

The `onresize` event occurs when the browser window is resized. It's commonly used to adjust the layout or handle responsiveness.

### **Example: Handling `onresize` Event**

```html
<p>Window Width: <span id="width"></span></p>
<p>Window Height: <span id="height"></span></p>

<script>
  const widthElement = document.getElementById('width');
  const heightElement = document.getElementById('height');

  window.addEventListener('resize', function() {
    widthElement.textContent = window.innerWidth;
    heightElement.textContent = window.innerHeight;
  });

  // Trigger the resize event on page load
  widthElement.textContent = window.innerWidth;
  heightElement.textContent = window.innerHeight;
</script>
```

In this example:
- The dimensions of the window are updated whenever the window is resized.

### **Properties of `onresize` Event**
- **`event.target`**: The `window` object is typically the target of the `resize` event.
- **`event.type`**: The type of the event, which will be `"resize"`.

---

## **6. `ontoggle` Event**

The `ontoggle` event is triggered when the state of a `<details>` element is toggled (opened or closed).

### **Example: Handling `ontoggle` Event**

```html
<details id="myDetails">
  <summary>Click to toggle</summary>
  <p>Some hidden content</p>
</details>
<p>Toggle Status: <span id="toggleStatus"></span></p>

<script>
  const detailsElement = document.getElementById('myDetails');
  const toggleStatus = document.getElementById('toggleStatus');

  detailsElement.addEventListener('toggle', function() {
    toggleStatus.textContent = detailsElement.open ? 'Opened' : 'Closed';
  });
</script>
```

In this example:
- The `ontoggle` event detects whether the `<details>` element is open or closed.
- `detailsElement.open` returns `true` if the `<details>` element is open, otherwise `false`.

### **Properties of `ontoggle` Event**
- **`event.target`**: The `<details>` element being toggled.
- **`event.type`**: The type of the event, which will be `"toggle"`.

---

### **Conclusion**
- **`onchange`**: Used to detect changes in form inputs.
- **`onsubmit`**: Used to handle form submissions.
- **Media events**: Handle media actions like play and pause.
- **`onscroll`**: Detects scrolling in elements or the window.
- **`onresize`**: Detects when the window is resized, useful for responsive layouts.
- **`ontoggle`**: Detects the toggling of `<details>` elements.

These events provide a way to capture user interactions and changes in the DOM, allowing you to build dynamic and interactive web applications.