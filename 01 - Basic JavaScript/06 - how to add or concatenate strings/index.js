var first_name = "Raiyan";
var last_name = "Jiyon";

console.log(first_name + " " + last_name)
var full_name = first_name.concat(last_name);
console.log(full_name)

let str1 = "Hello";
let str2 = "World!";
let result = `${str1} ${str2}`
console.log(result);

// join method is only used in array
let arr = ["Hello", "JavaScript!"];
let newArr = arr.join(" ");
console.log(newArr);