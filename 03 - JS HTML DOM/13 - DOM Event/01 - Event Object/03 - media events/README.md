# **Media Events in JavaScript**

**Media events** are used to handle the playback of multimedia elements like audio and video. These events allow developers to control the flow of media playback, monitor loading progress, handle errors, and respond to specific actions (such as playing, pausing, or seeking) when interacting with media elements.

### **Common Media Events**
- **`play`**: Fired when the media starts playing.
- **`pause`**: Fired when the media is paused.
- **`ended`**: Fired when the media has finished playing.
- **`timeupdate`**: Fired as the media plays and the current time updates.
- **`volumechange`**: Fired when the volume is changed.
- **`loadeddata`**: Fired when media data is loaded.
- **`progress`**: Fired when the browser is downloading the media.
- **`error`**: Fired when an error occurs while loading the media.

### **Example: Basic Media Event Handling**

```html
<video id="myVideo" controls width="400">
  <source src="sample.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
<p id="status">Status: Not started</p>

<script>
  const video = document.getElementById('myVideo');
  const status = document.getElementById('status');

  video.addEventListener('play', function() {
    status.textContent = 'Status: Playing';
  });

  video.addEventListener('pause', function() {
    status.textContent = 'Status: Paused';
  });

  video.addEventListener('ended', function() {
    status.textContent = 'Status: Ended';
  });
</script>
```

In this example:
- The `play`, `pause`, and `ended` events update the status text below the video.