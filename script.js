document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("playButton");
    const audio = document.getElementById("bgMusic");

    button.addEventListener("click", function() {
        audio.volume = 0.3;
        audio.play();
    });
});


const button = document.getElementById("sendStory");
const input = document.getElementById("storyInput");
const confirmation = document.getElementById("confirmation");

button.addEventListener("click", () => {
  const text = input.value.trim();
  if (!text) return;

  confirmation.textContent = "Your story has been sent.";
  input.value = "";
});

