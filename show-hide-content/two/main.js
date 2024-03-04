const btnShow = document.querySelector(".show-btn");
const btnHide = document.querySelector(".hide-btn");
/* const content = document.querySelector(".content"); */

const showContent = () => {
  const btnShow = document.querySelector(".show-btn");
  btnShow.style.display = "none";

  const content = document.querySelector(".content");
  content.style.display = "block";

  const btnHide = document.querySelector(".hide-btn");
  btnHide.style.display = "block";

  /* btnShow.style.display = "none";
  content.classList.remove("disabled");
  content.classList.add("enabled");
  btnHide.style.display = "block"; */
};

const hideContent = () => {
  const btnShow = document.querySelector(".show-btn");
  btnShow.style.display = "block";

  const content = document.querySelector(".content");
  content.style.display = "none";

  const btnHide = document.querySelector(".hide-btn");
  btnHide.style.display = "none";

  /* btnHide.style.display = "none";
  content.classList.remove("enabled");
  content.classList.add("disabled");
  btnShow.style.display = "block"; */
};

btnShow.addEventListener("click", showContent);
btnHide.addEventListener("click", hideContent);
