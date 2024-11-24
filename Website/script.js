// Get video element
const video = document.getElementById('bg-video');

// Update video playback position in local storage
function updatePlaybackPosition() {
    localStorage.setItem('videoTime', video.currentTime);
}

// Set video playback position from local storage
function setPlaybackPosition() {
    const savedTime = localStorage.getItem('videoTime');
    if (savedTime) {
        video.currentTime = parseFloat(savedTime);
    }
}

// Set the video playback position when the page loads
window.addEventListener('load', () => {
    setPlaybackPosition();
    video.play(); // Ensure the video plays when the page loads
});

// Event listener to update playback position every second
video.addEventListener('timeupdate', updatePlaybackPosition);