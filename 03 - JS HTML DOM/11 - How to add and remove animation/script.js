let len = document.querySelectorAll(".btn").length;

for (let i = 0; i < len; i++) {

    let button = document.querySelectorAll(".btn")[i];
    button.addEventListener("click", function () {
        let text = this.innerHTML;
        playAudio(text);
        playAnimation(text);
    })
}

function playAudio(text) {
    switch (text) {
        case "a":
            var audio = new Audio("audio/a.mp3");
            audio.play();
            break;

        case "b":
            var audio = new Audio("audio/b.mp3");
            audio.play();
            break;

        case "c":
            var audio = new Audio("audio/c.mp3");
            audio.play();
            break;

        default:
            break;
    }
}

function playAnimation(text) {
    let myAnimation = document.querySelector("." + text);
    myAnimation.classList.add("hover");

    setTimeout(function () {
        myAnimation.classList.remove("hover");
    }, 1000);
}