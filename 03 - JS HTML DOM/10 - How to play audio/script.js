let len = document.querySelectorAll(".btn").length;

for (let i = 0; i < len; i++) {
    document.querySelectorAll(".btn")[i].addEventListener("click", function () {
        let text = this.innerHTML;
        playAudio(text);
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