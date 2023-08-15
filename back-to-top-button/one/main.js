var scrollButton = document.getElementById("scrollButton");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollButton.classList.add("active");
  } else {
    scrollButton.classList.remove("active");
  }
}

scrollButton.addEventListener("click", function () {
  scrollToTop(500); // Duración de la animación en milisegundos (en este caso, 1000 ms = 1 segundo)
});

function scrollToTop(duration) {
  var scrollStep = -window.scrollY / (duration / 15);
  var scrollInterval = setInterval(function () {
    if (window.scrollY !== 0) {
      window.scrollBy(0, scrollStep);
    } else {
      clearInterval(scrollInterval);
    }
  }, 15);
}
