let showAllElements = document.querySelectorAll('.slideshow-element');
let count = 1;

setInterval(() => {
    count ++;

    let currentElement = document.querySelector('.current');

    currentElement.classList.remove('current');

    if (count > showAllElements.length) {
        count = 1;
        showAllElements[0].classList.add('current');
    } else {
        currentElement.nextElementSibling.classList.add('current');
    }
}, 3000);