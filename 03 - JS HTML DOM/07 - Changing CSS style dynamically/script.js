// one way but not effective
function addStyle() {
    var paraStyle = document.querySelector("#para-id");
    paraStyle.style.color = "red";
    paraStyle.style.fontSize = "2rem";
}

// second way but effective
function addStyle() {
    let paraStyle = document.querySelector("#para-id");
    paraStyle.classList.add("para-style");
}

function removeStyle() {
    let paraStyle = document.querySelector("#para-id");
    paraStyle.classList.remove("para-style");
}