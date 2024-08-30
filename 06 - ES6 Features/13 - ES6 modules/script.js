import { text, setText } from "./myModules.js";

console.log(text);  // Logs: "Welcome to JavaScript ES6!"

setText("Hello JavaScript!");  // Updates the `text` variable and logs the updated value

console.log(text);  // Logs the updated text, "Hello JavaScript!" (if accessed after update)