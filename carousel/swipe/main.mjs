const swipeContainer = document.getElementById(
  "swipe-container"
);
const swipeContent = document.getElementById("swipe-content");
const colors = document.getElementsByClassName("color");

let currentIndex = 0;
const totalColors = colors.length;
const swipeWidth = swipeContainer.offsetWidth;
let startX = 0;
let dist = 0;

swipeContent.style.width = `${totalColors * swipeWidth}px`;

function handleSwipe() {
  const threshold = swipeWidth / 4;
  if (dist > threshold) {
    currentIndex =
      (currentIndex - 1 + totalColors) % totalColors;
  } else if (dist < -threshold) {
    currentIndex = (currentIndex + 1) % totalColors;
  }
  const translateX = -currentIndex * swipeWidth;
  swipeContent.style.transform = `translateX(${translateX}px)`;
}

swipeContainer.addEventListener("touchstart", (event) => {
  startX = event.touches[0].clientX;
});

swipeContainer.addEventListener("touchmove", (event) => {
  const currentX = event.touches[0].clientX;
  dist = currentX - startX;
  swipeContent.style.transform = `translateX(${dist}px)`;
});

swipeContainer.addEventListener("touchend", () => {
  handleSwipe();
});

