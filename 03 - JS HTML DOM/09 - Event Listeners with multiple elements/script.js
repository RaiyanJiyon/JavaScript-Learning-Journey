let len = document.querySelectorAll(".myButton").length;

for (let i = 0; i < len; i++) {
    document.querySelectorAll(".myButton")[i].addEventListener("click", function() {
        let buttonText = this.innerHTML;
        document.querySelector("h1").innerHTML = buttonText + " is click";
    });
};
