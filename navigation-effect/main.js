/* window.addEventListener("scroll", function () {
  var subtitles = document.querySelectorAll("h2");

  for (var i = 0; i < subtitles.length; i++) {
    var subtitle = subtitles[i];
    var rect = subtitle.getBoundingClientRect();

    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      subtitle.classList.add("current");
    } else {
      subtitle.classList.remove("current");
    }
  }
});
 */