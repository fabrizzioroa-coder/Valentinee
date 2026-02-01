const noButton = document.getElementById("no-button");
const yesButton = document.getElementById("yes-button");

const noMessage = document.getElementById("no-message");
const yesMessage = document.getElementById("yes-message");

noButton.addEventListener("mouseover", () => {
  noButton.classList.add("move");
  setTimeout(() => noButton.classList.remove("move"), 500);
});

noButton.addEventListener("click", () => {
  noMessage.style.display = "block";
  yesMessage.style.display = "none";
});

yesButton.addEventListener("click", () => {
  yesMessage.style.display = "block";
  noMessage.style.display = "none";
});
