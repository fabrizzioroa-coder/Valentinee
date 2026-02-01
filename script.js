let videoPlayed = false;

function showMessage(response) {
  if (response === "No") {
    const noButton = document.getElementById("no-button");
    const maxWidth = window.innerWidth - noButton.offsetWidth;
    const maxHeight = window.innerHeight - noButton.offsetHeight;

    // Position absolue pour pouvoir le déplacer
    noButton.style.position = "absolute";

    // Changement d'image
    document.getElementsByClassName("image")[0].src = "images/gun.gif";

    // Position aléatoire
    const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
    const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";

    // Texte et nom
    document.getElementById("question").textContent = "Choisis bien 😏";
    document.getElementById("name").style.display = "none";

    // Éviter de rajouter l'event plusieurs fois
    if (!noButton.dataset.listenerAdded) {
      noButton.dataset.listenerAdded = "true";

      noButton.addEventListener("mouseover", () => {
        if (!videoPlayed) {
          const videoElement = document.createElement("video");
          videoElement.src = "./Maroon 5 - Sugar.mp4#t=42";
          videoElement.autoplay = true;
          videoElement.controls = false;

          videoElement.style.position = "fixed";
          videoElement.style.top = "40%";
          videoElement.style.left = "50%";
          videoElement.style.transform = "translate(-50%, -50%)";
          videoElement.style.width = "700px";
          videoElement.style.zIndex = "200";

          document.body.appendChild(videoElement);
          videoPlayed = true;
        }

        const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
        const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

        noButton.style.left = randomX + "px";
        noButton.style.top = randomY + "px";
      });
    }
  }

  if (response === "Yes") {
    // Nettoyage
    const name = document.getElementById("name");
    if (name) name.remove();

    const noButton = document.getElementById("no-button");
    if (noButton) noButton.remove();

    const videoElement = document.querySelector("video");
    if (videoElement) {
      videoElement.pause();
      videoElement.remove();
    }

    // Son
    const audioElement = document.createElement("audio");
    audioElement.src = "./Minions Cheering.mp3";
    audioElement.preload = "auto";
    audioElement.play().catch(() => {});

    // Message final
    const question = document.getElementById("question");
    question.textContent = "Rendez-vous le 14, Madame 💖";
    question.style.fontStyle = "normal";

    document.getElementsByClassName("image")[0].src = "images/dance.gif";

    // Suppression du bouton Oui
    const yesButton = document.getElementById("yes-button");
    if (yesButton) yesButton.remove();
  }
}
