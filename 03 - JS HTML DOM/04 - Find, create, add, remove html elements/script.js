let myLink = document.getElementsByTagName("a");

myLink[0].innerHTML = "Study With Anis";
myLink[0].style.textDecoration = "none";
myLink[0].style.color = "red";
myLink[0].href = "http://www.anisul.com";


let myDiv = document.querySelector("#div-id");

// Create a new element
let heading4 = document.createElement("h1");
let text4 = document.createTextNode("Heading 4");

// Add text to the new element
heading4.appendChild(text4);

// Append the new element to the div
myDiv.appendChild(heading4);


let heading5 = document.createElement("h2");
let text5 = document.createTextNode("Heading 5");

heading5.appendChild(text5);
// Add a element in first place using DOM
myDiv.insertBefore(heading5, h1);


// Remove the old element from the div
myDiv.removeChild(heading4)