document.addEventListener("mousemove", function (e) {
  var cursor = document.getElementById("cursor");
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});
