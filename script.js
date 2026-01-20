document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("playButton");
    const audio = document.getElementById("bgMusic");

    button.addEventListener("click", function() {
        audio.volume = 0.3;
        audio.play();
    });
});


const input = document.getElementById("storyInput");
const button = document.getElementById("submitStory");
const stories = document.getElementById("stories");

if (button) {
  button.addEventListener("click", () => {
    const text = input.value.trim();
    if (!text) return;

    const div = document.createElement("div");
    div.className = "story";
    div.textContent = text;

    stories.prepend(div);
    input.value = "";
  });
}
