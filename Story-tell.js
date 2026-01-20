document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("sendStory");
  const input = document.getElementById("storyInput");
  const confirmation = document.getElementById("confirmation");

  if (!button || !input || !confirmation) {
    console.error("Elementi non trovati");
    return;
  }

  button.addEventListener("click", () => {
    const text = input.value.trim();
    if (!text) return;

    confirmation.textContent = "Your story has been sent.";
    input.value = "";
  });
});
