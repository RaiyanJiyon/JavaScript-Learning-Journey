# Clipboard Event

Clipboard events in JavaScript allow you to interact with the system's clipboard, enabling actions such as copying, cutting, and pasting content. These events are particularly useful when you need to customize or enhance the user experience related to clipboard interactions (e.g., copying text programmatically or restricting paste functionality).

The most common clipboard events are:

1. **`copy`**: Triggered when a user copies content (e.g., via `Ctrl + C` or right-click → copy).
2. **`cut`**: Triggered when a user cuts content (e.g., via `Ctrl + X` or right-click → cut).
3. **`paste`**: Triggered when a user pastes content (e.g., via `Ctrl + V` or right-click → paste).

### Example 1: Detecting Clipboard Events (`copy`, `cut`, `paste`)
This example demonstrates how to detect and handle clipboard events using JavaScript.

```html
<!DOCTYPE html>
<html>
<body>
    <textarea id="textArea" rows="4" cols="50">Try copying, cutting, or pasting in this text area.</textarea>

    <script>
        const textArea = document.getElementById('textArea');

        textArea.addEventListener('copy', function() {
            console.log('Content copied!');
        });

        textArea.addEventListener('cut', function() {
            console.log('Content cut!');
        });

        textArea.addEventListener('paste', function() {
            console.log('Content pasted!');
        });
    </script>
</body>
</html>
```
Here, when the user copies, cuts, or pastes text in the `<textarea>`, a message will be logged to the console indicating the specific action.

### Example 2: Programmatically Modifying Clipboard Content (`copy`)
You can modify the content that is copied to the clipboard by using the `ClipboardEvent` object's `clipboardData`.

```html
<!DOCTYPE html>
<html>
<body>
    <textarea id="textArea" rows="4" cols="50">Copy this text, and it will be modified.</textarea>

    <script>
        const textArea = document.getElementById('textArea');

        textArea.addEventListener('copy', function(event) {
            event.preventDefault(); // Prevent the default copy action
            const selectedText = window.getSelection().toString();
            event.clipboardData.setData('text/plain', selectedText.toUpperCase()); // Modify clipboard content
            console.log('Modified text copied:', selectedText.toUpperCase());
        });
    </script>
</body>
</html>
```
In this example, when the user copies text, it will be converted to uppercase before being placed in the clipboard.

### Example 3: Restricting Paste Action
You can intercept the `paste` event to modify or restrict the content that is pasted into an element.

```html
<!DOCTYPE html>
<html>
<body>
    <textarea id="textArea" rows="4" cols="50">You can only paste numbers here.</textarea>

    <script>
        const textArea = document.getElementById('textArea');

        textArea.addEventListener('paste', function(event) {
            event.preventDefault(); // Prevent the default paste action
            const pastedData = event.clipboardData.getData('text');
            // Allow only numbers
            const sanitizedData = pastedData.replace(/\D/g, '');
            textArea.value += sanitizedData;
            console.log('Sanitized paste:', sanitizedData);
        });
    </script>
</body>
</html>
```
This example only allows numbers to be pasted into the text area. Any non-numeric characters are stripped out before pasting.

### Example 4: Using `Clipboard API` (Modern Approach)
The **Clipboard API** is a more modern and powerful way to interact with the clipboard in JavaScript. You can use methods like `navigator.clipboard.writeText()` and `navigator.clipboard.readText()` for copying and pasting content programmatically.

#### Programmatically copying text to the clipboard:
```html
<!DOCTYPE html>
<html>
<body>
    <button id="copyBtn">Copy Text</button>
    <p id="copyText">This text will be copied to the clipboard.</p>

    <script>
        const copyBtn = document.getElementById('copyBtn');
        const copyText = document.getElementById('copyText');

        copyBtn.addEventListener('click', function() {
            navigator.clipboard.writeText(copyText.textContent)
                .then(() => {
                    console.log('Text copied to clipboard:', copyText.textContent);
                })
                .catch(err => {
                    console.error('Failed to copy text: ', err);
                });
        });
    </script>
</body>
</html>
```
In this example, clicking the button will copy the text from the paragraph element to the clipboard using the `Clipboard API`.

#### Reading text from the clipboard:
```html
<!DOCTYPE html>
<html>
<body>
    <button id="pasteBtn">Paste Text</button>
    <textarea id="outputText" rows="4" cols="50" placeholder="Click 'Paste Text' to paste clipboard content here"></textarea>

    <script>
        const pasteBtn = document.getElementById('pasteBtn');
        const outputText = document.getElementById('outputText');

        pasteBtn.addEventListener('click', function() {
            navigator.clipboard.readText()
                .then(text => {
                    outputText.value = text;
                    console.log('Text pasted from clipboard:', text);
                })
                .catch(err => {
                    console.error('Failed to read text from clipboard: ', err);
                });
        });
    </script>
</body>
</html>
```
This example uses the `Clipboard API` to paste the text content from the clipboard into the text area when the button is clicked.

### Key Points:
- **`copy`, `cut`, `paste` events**: These events detect when clipboard actions occur.
- **`clipboardData`**: The `ClipboardEvent` object provides access to the clipboard's data through `clipboardData`, allowing you to manipulate what is copied, cut, or pasted.
- **Clipboard API**: A modern way to programmatically copy and paste content using `navigator.clipboard`.

Clipboard events and the Clipboard API are essential for creating interactive user experiences that involve copying, cutting, or pasting content.