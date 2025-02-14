var loader = document.getElementById("pre-loader");
window.addEventListener("load", function () {
  setTimeout(function () {
    loader.style.display = "none";
  }, 1000);
});
