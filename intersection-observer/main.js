const imgOne = document.querySelector(".img-one");
const imgTwo = document.querySelector(".img-two");

const callback = (entries, obs) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");

      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(callback, {
  root: null,
  rootMargin: "0px",
  threshold: 1.0,
});

observer.observe(imgOne);
observer.observe(imgTwo);
