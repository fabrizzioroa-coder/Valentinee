function showMessage(response) {
  let videoPlayed = false;

  if (response === "Non") {
    const noButton = document.getElementById("no-button");
    const maxWidth = window.innerWidth - noButton.offsetWidth;
    const maxHeight = window.innerHeight - noButton.offsetHeight;

    // Set the button position to absolute
    noButton.style.position = "absolute";

    // Change the image to gun.gif
    document.getElementsByClassName("image")[0].src = "images/gun.gif";

    // Generate random coordinates within the window
    const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
    const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";

    // Update the question text and hide the name
    document.getElementById("question").textContent = "Bien tenté… mais tu t’échapperas pas si facilement 😏";
    document.getElementById("name").style.display = "Valentine";

    // Move the "Non" button on hover and play video once
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
        document.body.appendChild(videoElement);

        videoPlayed = true;
      }

      // Generate new random position on hover
      const newX = Math.max(0, Math.floor(Math.random() * maxWidth));
      const newY = Math.max(0, Math.floor(Math.random() * maxHeight));

      noButton.style.zIndex = "100";
      noButton.style.left = newX + "px";
      noButton.style.top = newY + "px";
    });
  }

  if (response === "Oui") {
    // Remove the name message and "Non" button
    document.getElementById("name").remove();
    document.getElementById("no-button").remove();

    // Stop any playing video
    const videoElement = document.querySelector("video");
    if (videoElement) {
      videoElement.pause();
      videoElement.remove();
    }

    // Play audio for celebration
    const audioElement = document.createElement("audio");
    audioElement.src = "./Minions Cheering.mp4";
    audioElement.preload = "auto";
    audioElement.play().catch(e => console.error("Audio playback failed:", e));

    // Update question text and show dance GIF
    const questionText = document.getElementById("question");
    questionText.textContent = "Yeeeesss 💕 Rendez-vous le 14, Madame";
    questionText.style.display = "block";
    questionText.style.fontStyle = "normal";
    document.getElementsByClassName("image")[0].src = "images/dance.gif";

    // Remove the "Oui" button
    document.getElementById("Oui-button").remove();
  }
}
