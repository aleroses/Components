const btnShow = document.querySelector(".show-btn");
const btnHide = document.querySelector(".hide-btn");

const showContent = () => {
  const btnShow =
    document.querySelector(".show-btn");
  btnShow.style.display = "none";

  const content =
    document.querySelector(".content");
  content.style.display = "block";

  const btnHide =
    document.querySelector(".hide-btn");
  btnHide.style.display = "block";
};

const hideContent = () => {
  const btnShow =
    document.querySelector(".show-btn");
  btnShow.style.display = "block";

  const content =
    document.querySelector(".content");
  content.style.display = "none";

  const btnHide =
    document.querySelector(".hide-btn");
  btnHide.style.display = "none";
};

btnShow.addEventListener("click", showContent);
btnHide.addEventListener("click", hideContent);
