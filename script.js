function showMessage(response) {
  let videoPlayed = false;

  if (response === "Non") {
    const noButton = document.getElementById("no-button");
    const maxWidth = window.innerWidth - noButton.offsetWidth;
    const maxHeight = window.innerHeight - noButton.offsetHeight;

    noButton.style.position = "absolute";

    // Changer l'image
    document.getElementsByClassName("image")[0].src = "images/gun.gif";

    const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
    const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";

    document.getElementById("question").textContent = "Choisis bien…";
    document.getElementById("name").style.display = "none";

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
        videoElement.style.zIndex = "99";

        document.body.appendChild(videoElement);
        videoPlayed = true;
      }

      const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
      const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

      noButton.style.zIndex = "100";
      noButton.style.left = randomX + "px";
      noButton.style.top = randomY + "px";
    });
  }

  if (response === "Yes") {
    document.getElementById("name").remove();
    document.getElementById("no-button").remove();

    const videoElement = document.querySelector("video");
    if (videoElement) {
      videoElement.pause();
      videoElement.remove();
    }

    const audioElement = document.createElement("audio");
    audioElement.src = "./Minions Cheering.mp3";
    audioElement.preload = "auto";
    audioElement.play().catch(e =>
      console.error("Erreur de lecture audio :", e)
    );

    const yesMessage = document.getElementById("question");
    yesMessage.textContent = "On se voit le 14 Madame 💖";
    yesMessage.style.display = "block";
    yesMessage.style.fontStyle = "normal";

    document.getElementsByClassName("image")[0].src = "images/dance.gif";

    document.getElementById("yesButton").remove();
  }
}

