const ratingButtons = document.querySelectorAll("#rating-button");
const submitButton = document.querySelector("#submit-button");
const ratingCard = document.querySelector(".rating-card");
const thanksCard = document.querySelector(".thank-you-card");
const selectedRating = document.querySelector("#user-rate");

let userRate = null;

ratingButtons.forEach((button) => {
  button.addEventListener("click", () => {
    ratingButtons.forEach((button) => {
      button.classList.remove("selected");
    });
    button.classList.add("selected");
    userRate = button.textContent;
    selectedRating.textContent = userRate;
  });
});

submitButton.addEventListener("click", () => {
  if (!userRate) return;

  ratingCard.classList.add("hidden");
  thanksCard.classList.remove("hidden");
});
