document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("sendStory");
  const input = document.getElementById("storyInput");
  const confirmation = document.getElementById("confirmation");

  button.addEventListener("click", () => {
    const text = input.value.trim();
    if (!text) return;

    // Crea un nuovo div per la storia
    const storyDiv = document.createElement("div");
    storyDiv.className = "story";
    storyDiv.textContent = text;

    // Aggiunge la storia sotto il div di conferma
    confirmation.appendChild(storyDiv);

    // Pulisce il textarea
    input.value = "";

    // Aggiorna il messaggio di conferma
    confirmation.scrollIntoView({ behavior: "smooth" });
  });
});
