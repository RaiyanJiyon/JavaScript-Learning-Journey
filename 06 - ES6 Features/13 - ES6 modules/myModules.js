export let text = "Welcome to JavaScript ES6!";

// Modify the `text` variable by reassigning the value
export function setText(newText) {
    text = newText;
    console.log(`Text updated to: ${text}`);
}