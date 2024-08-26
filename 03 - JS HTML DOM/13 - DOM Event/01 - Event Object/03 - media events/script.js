// Select the video element on the page
let video = document.querySelector('video');

// Add an event listener for when the video is ready to play
video.addEventListener('canplay', function() {
    console.log("Video Can Play");  // Log message when the video can start playing
});

// Add an event listener for when the video starts playing
video.addEventListener('playing', function() {
    console.log("Playing");  // Log message when the video is playing
});

// Add an event listener for when the video is paused
video.addEventListener('pause', function() {
    console.log("Pause");  // Log message when the video is paused
});

// Add an event listener for when the video ends
video.addEventListener('ended', function() {
    console.log("Ended");  // Log message when the video has finished playing
});

// Add an event listener for when the video's volume changes
video.addEventListener('volumechange', function() {
    console.log("Volume Change");  // Log message when the volume is changed
});