const showButtons = document.querySelectorAll(".btn-show");
const hideButtons = document.querySelectorAll(".hide-btn");

const descriptions = document.querySelectorAll(".description");

showButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    descriptions[index].classList.add("active");
  });
});

hideButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    descriptions[index].classList.remove("active");
  });
});
