let i = false;

while (!i) {
    let num = parseInt(prompt("Enter a number between 1 - 5: "));
    let randomNum = Math.floor(Math.random() * 5) + 1;

    if (!isNaN(num) && num >= 1 && num <= 5) {
        if (num == randomNum) {
            document.body.innerHTML = `You Win! Congratulations. The correct number was ${randomNum}.`;
            i = true;
        } else {
            alert(`You Lost! The correct number was ${randomNum}. Try Again.`);
        }
    } else {
        alert("Wrong Input. Please enter a number between 1 and 5.");
    }
}
