const video = document.getElementById('myVideo');
const volumeControl = document.getElementById('volumeControl');

volumeControl.addEventListener('input', () => {
    video.volume = volumeControl.value;
});

video.addEventListener('volumechange', () => {
    console.log(`Volume changed to: ${video.volume}`);
});