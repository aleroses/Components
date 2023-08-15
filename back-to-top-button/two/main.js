let btn = document.querySelector(".back-to-top");
btn.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
});

window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 0) {
    btn.style.display = "flex";
  } else {
    btn.style.display = "none";
  }
});
