var loader = document.getElementById("pre-loader");
window.addEventListener("load", function () {
  setTimeout(function () {
    loader.style.display = "none";
  }, 1000);
});

let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#d4af37 ${scrollValue}%, #303030 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
