/* document.addEventListener("DOMContentLoaded", function () {
  var sliderImages = document.querySelectorAll(".slider img");
  var currentImageIndex = 0;
  var timer;

  function showImage(index) {
    sliderImages.forEach(function (img) {
      img.classList.remove("active");
    });
    sliderImages[index].classList.add("active");
  }

  function nextImage() {
    currentImageIndex++;
    if (currentImageIndex >= sliderImages.length) {
      currentImageIndex = 0;
    }
    showImage(currentImageIndex);
  }

  function previousImage() {
    currentImageIndex--;
    if (currentImageIndex < 0) {
      currentImageIndex = sliderImages.length - 1;
    }
    showImage(currentImageIndex);
  }

  function startSlider() {
    timer = setInterval(nextImage, 2000);
  }

  function stopSlider() {
    clearInterval(timer);
  }

  showImage(currentImageIndex);
  startSlider();

  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "hidden") {
      stopSlider();
    } else {
      startSlider();
    }
  });
});
 */

document.addEventListener("DOMContentLoaded", function () {
  var sliderImages = document.querySelectorAll(".slider img");
  var currentImageIndex = 0;
  var timer;

  function showImage(index) {
    sliderImages.forEach(function (img) {
      img.style.display = "none";
    });
    sliderImages[index].style.display = "block";
  }

  function nextImage() {
    currentImageIndex =
      (currentImageIndex + 1) % sliderImages.length;

    showImage(currentImageIndex);
  }

  function startSlider() {
    timer = setInterval(nextImage, 2000);
  }

  /* function stopSlider() {
    clearInterval(timer);
  } */

  showImage(currentImageIndex);
  startSlider();

  /* document.addEventListener("visibilitychange", function () {
    document.visibilityState === "hidden"
      ? stopSlider()
      : startSlider();
  }); */
});
