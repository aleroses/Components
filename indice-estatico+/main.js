/* window.addEventListener("scroll", function() {
  var sections = document.querySelectorAll("section");
  var indexItems = document.querySelectorAll(".index li");

  var currentSectionIndex = 0;
  var currentSectionOffset = window.innerHeight / 2;

  for (var i = 0; i < sections.length; i++) {
    var sectionOffset = sections[i].offsetTop;
    var sectionHeight = sections[i].offsetHeight;

    if (window.scrollY >= sectionOffset - currentSectionOffset && window.scrollY < sectionOffset + sectionHeight - currentSectionOffset) {
      currentSectionIndex = i;
    }
  }

  indexItems.forEach(function(item, index) {
    if (index === currentSectionIndex) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}); */


/* ----------------- Otra forma --------------------- */
window.addEventListener("scroll", () => {
  const sections = Array.from(document.querySelectorAll("section"));
  const indexItems = Array.from(document.querySelectorAll(".index li"));

  const currentSectionIndex = sections.findIndex((section) => {
    const sectionOffset = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const currentSectionOffset = window.innerHeight / 2;

    return (
      window.scrollY >= sectionOffset - currentSectionOffset &&
      window.scrollY < sectionOffset + sectionHeight - currentSectionOffset
    );
  });

  indexItems.forEach((item, index) => {
    item.classList.toggle("active", index === currentSectionIndex);
  });
});
