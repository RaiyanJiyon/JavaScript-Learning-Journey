let num = new Array();

for (let i = 0; i < 5; i++) {
    num[i] = parseFloat(prompt("Enter Array: "));
}

let sum = 0;

for (let i = 0; i < 5; i++) {
    sum = sum + num[i];
}

document.body.innerHTML = `"Sum is : ${sum}"`;