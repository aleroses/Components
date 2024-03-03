/* let currentIndex = 0;
const items = document.querySelectorAll(".itemCarrousel");

function prevItem() {
  currentIndex =
    (currentIndex - 1 + items.length) % items.length;
  updateCarrousel();
}

function nextItem() {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarrousel();
}

function updateCarrousel() {
  const carrousel = document.querySelector(".conteCarrousel");
  const itemWidth = items[0].offsetWidth;
  carrousel.style.transform = `translateX(-${
    currentIndex * itemWidth
  }px)`;
}
 */
