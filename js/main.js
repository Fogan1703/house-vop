const video = document.getElementById("video");
const playButton = document.getElementById("video-play-button");

video.paused = true;
playButton.classList.add("video-play-button-pause");

video.addEventListener("click", function() {
    if(video.paused === true) {
        video.play();
        playButton.classList.remove("video-play-button-pause");
    } else {
        video.pause();
        playButton.classList.add("video-play-button-pause");
    }
});
