document.getElementById("playButton").addEventListener("click", function() {
    const audio = document.getElementById("bgMusic");
    audio.volume = 0.3;      // volume iniziale
    audio.play();
});
