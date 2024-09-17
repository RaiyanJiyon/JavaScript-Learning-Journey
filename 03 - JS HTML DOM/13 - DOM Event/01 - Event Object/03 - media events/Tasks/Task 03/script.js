const video = document.getElementById('myVideo');
const message = document.getElementById('message');

video.addEventListener('loadeddata', () => {
    message.textContent = "Status: Video is loaded and playing"
    video.play();
});

video.addEventListener('play', () => {
    message.textContent = 'Status: Playing'
})

