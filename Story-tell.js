document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("sendStory");
  const input = document.getElementById("storyInput");
  const confirmation = document.getElementById("confirmation");
  
  let alignRight = true; // alternanza allineamento

  button.addEventListener("click", () => {
    const text = input.value.trim();
    if (!text) return;

    // crea il div della storia
    const storyDiv = document.createElement("div");
    storyDiv.className = "story";
    storyDiv.textContent = text;

    // alterna allineamento
    storyDiv.style.alignSelf = alignRight ? "flex-end" : "flex-start";
    alignRight = !alignRight;

    // aggiunge il div nella sezione
    confirmation.appendChild(storyDiv);

    // pulisce textarea
    input.value = "";

    // scroll automatico se necessario
    storyDiv.scrollIntoView({ behavior: "smooth" });
  });
});
