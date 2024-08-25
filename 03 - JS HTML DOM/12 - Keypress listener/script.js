let len = document.querySelectorAll(".btn").length;

for (let i = 0; i < len; i++) {
    let buttons = document.querySelectorAll(".btn")[i].addEventListener("click", function() {
        let text = this.innerHTML;
        playAudio(text);
        playAnimation(text);
    })
}

document.addEventListener("keypress",function(event) {
    let text = event.key;
    playAudio(text);
    playAnimation(text);
})

function playAudio(text) {
    switch (text) {
        case "a":
            var audio = new Audio("../11 - How to add and remove animation/audio/a.mp3");
            audio.play();
            break;
        case "b":
            var audio = new Audio("../11 - How to add and remove animation/audio/b.mp3");
            audio.play();
            break;
        case "c":
            var audio = new Audio("../11 - How to add and remove animation/audio/c.mp3");
            audio.play();
            break;
    
        default:
            break;
    }
}

function playAnimation(text) {
    let hoverButton = document.querySelector("."+ text);
    hoverButton.classList.add("hover");

    setTimeout(() => {
        hoverButton.classList.remove("hover");
    }, 1000);
}



let count = 0;

document.querySelector("textarea").addEventListener("keypress", function(event) {
    let key = event.key;

    document.querySelector("#para").innerHTML = "" + count;
    count++
})