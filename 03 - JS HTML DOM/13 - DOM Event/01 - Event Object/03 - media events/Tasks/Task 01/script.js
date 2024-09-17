const video = document.getElementById('myVideo');
const currentTimeDisplay = document.getElementById('currentTime');
const durationDisplay = document.getElementById('duration');

video.addEventListener('loadeddata', function () {
    durationDisplay.textContent = video.duration.toFixed(2);
});

video.addEventListener('timeupdate', function () {
    currentTimeDisplay.textContent = video.currentTime.toFixed(2);
});