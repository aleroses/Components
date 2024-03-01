function startSlider() {
  const slider = document.querySelector(".slider");
  const sliderImages = document.querySelectorAll(".slider img");
  const imageWidth = sliderImages[0].clientWidth;
  let counter = 1;

  setInterval(() => {
    slider.style.transform = `translateX(${
      -imageWidth * counter
    }px)`;
    slider.style.transition = "transform 0.5s ease";
    counter++;

    if (counter === sliderImages.length) {
      counter = 0;
      setTimeout(() => {
        slider.style.transform = `translateX(0)`;
        slider.style.transition = "none";
      }, 2000);
    }
  }, 2000);
}

startSlider();
