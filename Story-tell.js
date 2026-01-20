document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("sendStory");
  const input = document.getElementById("storyInput");
  const confirmation = document.getElementById("confirmation");

  button.addEventListener("click", () => {
    const text = input.value.trim();
    if (!text) return;

    // crea il div della storia
    const storyDiv = document.createElement("div");
    storyDiv.className = "story";
    storyDiv.textContent = text;

    // aggiunge il div nella sezione
    confirmation.appendChild(storyDiv);

    // pulisce textarea
    input.value = "";

    // scroll automatico
    storyDiv.scrollIntoView({ behavior: "smooth" });
  });
});
