/* const sliderContainer = document.querySelector(".slider-container");
const prevButton = document.querySelector(".btn-prev");
const nextButton = document.querySelector(".btn-next");

let currentIndex = 0;
let intervalId = null;

function slideTo(index) {
  // const slideWidth = sliderContainer.clientWidth;
  const slideWidth = sliderContainer.getBoundingClientRect().width;
  const translateXValue = -slideWidth * index;
  sliderContainer.style.transform = `translateX(${translateXValue}px)`;
}

function slideNext() {
  currentIndex++;

  if (currentIndex >= sliderContainer.children.length) {
    currentIndex = 0;
  }

  slideTo(currentIndex);
}

function slidePrev() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = sliderContainer.children.length - 1;
  }
  slideTo(currentIndex);
}

nextButton.addEventListener("click", slideNext);
prevButton.addEventListener("click", slidePrev);

function startAutoSlide() {
  intervalId = setInterval(slideNext, 2000);
}

function stopAutoSlide() {
  clearInterval(intervalId);
}

sliderContainer.addEventListener("mouseenter", stopAutoSlide);
sliderContainer.addEventListener("mouseleave", startAutoSlide);

startAutoSlide(); */

const sliderContainer = document.querySelector(".slider-container");
const prevButton = document.querySelector(".btn-prev");
const nextButton = document.querySelector(".btn-next");

let currentIndex = 0;

const slideTo = (index) => {
  const slideWidth = sliderContainer.getBoundingClientRect().width;
  const translateXValue = -slideWidth * index;

  sliderContainer.style.transform = `translateX(${translateXValue}px)`;
  sliderContainer.style.transition = "transform 0.9s ease";
  console.log(currentIndex);

  if (currentIndex === 0) {
    sliderContainer.style.transition = "none";
  }
};

const slideNext = () => {
  currentIndex++;

  if (currentIndex >= sliderContainer.children.length) {
    currentIndex = 0;
  }

  slideTo(currentIndex);
};

const slidePrev = () => {
  currentIndex--;

  if (currentIndex < 0) {
    console.log(sliderContainer.children.length);
    currentIndex = sliderContainer.children.length - 1;
  }

  slideTo(currentIndex);
};

nextButton.addEventListener("click", slideNext);
prevButton.addEventListener("click", slidePrev);

setInterval(slideNext, 2000);
