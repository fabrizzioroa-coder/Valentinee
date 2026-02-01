const noButton = document.getElementById("no-button");
const yesButton = document.getElementById("yes-button");

const noMessage = document.getElementById("no-message");
const yesMessage = document.getElementById("yes-message");

// Création du compteur
let attempts = 0;
const counter = document.createElement("p");
counter.id = "counter";
counter.textContent = "Tentatives pour dire non : 0";
document.querySelector(".Mainprompt").appendChild(counter);

// Déplacement aléatoire du bouton "Non"
function moveNoButton() {
  const container = document.querySelector(".container");

  const containerRect = container.getBoundingClientRect();
  const buttonRect = noButton.getBoundingClientRect();

  const maxX = containerRect.width - buttonRect.width;
  const maxY = containerRect.height - buttonRect.height;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noButton.style.position = "absolute";
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;

  attempts++;
  counter.textContent = `Tentatives pour dire non : ${attempts}`;

  // Messages de plus en plus taquins
  if (attempts === 3) counter.textContent += " 😏";
  if (attempts === 5) counter.textContent += " 😅";
  if (attempts === 8) counter.textContent += " 😂";
}

// Le bouton fuit la souris
noButton.addEventListener("mouseover", moveNoButton);

// Si elle clique quand même sur "Non"
noButton.addEventListener("click", () => {
  noMessage.style.display = "block";
  yesMessage.style.display = "none";
});

// Clic sur "Oui" 💖
yesButton.addEventListener("click", () => {
  yesMessage.style.display = "block";
  noMessage.style.display = "none";

  counter.textContent = `Tu as essayé ${attempts} fois… mais tu as dit OUI 💕`;
});

