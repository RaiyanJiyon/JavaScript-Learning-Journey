let message = "Today is Friday";  // A string to demonstrate string methods

// startsWith() method
// Check if the string starts with "Today" at index 0 (beginning of the string)
console.log(message.startsWith("Today", 0));  // Output: true

// Check if the string starts with "today" at index 0 (case-sensitive, so this returns false)
console.log(message.startsWith("today", 0));  // Output: false

// Check if the string starts with "Today" at index 5 (this checks the substring "is Friday" starting from index 5)
console.log(message.startsWith("Today", 5));  // Output: false


// endsWith() method
// Check if the string ends with "Friday" (case-sensitive)
console.log(message.endsWith("Friday"));  // Output: true

// Check if the string ends with "friday" (case-sensitive, so this returns false)
console.log(message.endsWith("friday"));  // Output: false


// includes() method
// Check if the string contains the substring "is"
console.log(message.includes("is"));  // Output: true

// Check if the string contains the substring "Is" (case-sensitive, so this returns false)
console.log(message.includes("Is"));  // Output: false