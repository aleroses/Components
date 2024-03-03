let sliderInner = document.querySelector(".slider--inner");

let images = sliderInner.querySelectorAll("img");
let index = 1;

setInterval(() => {
  let percentage = index * -100;

  /* sliderInner.style.transform = "translateX(" + percentage + "%)"; */
  sliderInner.style.transform = `translateX(${percentage}%)`;

  index++;

  if (index > images.length - 1) {
    index = 0;
  }
}, 2000);

/* Test---------------- */

/* function saludar() {
  console.log("Hola, mundo!");
}

var intervalId = setInterval(saludar, 1000);
console.log("x", intervalId);

// Después de 5 segundos, se detiene el intervalo
setTimeout(function () {
  clearInterval(intervalId);
}, 5000); */
