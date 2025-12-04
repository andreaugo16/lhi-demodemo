document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("playButton");
    const audio = document.getElementById("bgMusic");

    button.addEventListener("click", function() {
        audio.volume = 0.3;
        audio.play();
    });
});
