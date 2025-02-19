var loader = document.getElementById("pre-loader");
window.addEventListener("load", function () {
  setTimeout(function () {
    loader.style.display = "none";
  }, 600);
});

let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  // let scrollValue = Math.round((pos * 100) / calcHeight);
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

function copyLink() {
  navigator.clipboard
    .writeText("https://med6ba.github.io/noor-al-houda")
    .then(() => alert("تم نسخ الرابط!"))
    .catch((err) => console.error("Error copying link: ", err));
}

document.addEventListener("DOMContentLoaded", function () {
  var carouselElement = document.querySelector("#textCarousel");
  var carousel = new bootstrap.Carousel(carouselElement);

  var startX = 0;

  carouselElement.addEventListener("touchstart", function (e) {
    startX = e.touches[0].clientX;
  });

  carouselElement.addEventListener("touchend", function (e) {
    let endX = e.changedTouches[0].clientX;
    let diffX = startX - endX;

    if (Math.abs(diffX) > 50) {
      // Adjust swipe sensitivity
      if (diffX > 0) {
        carousel.prev(); // Reverse swipe for RTL
      } else {
        carousel.next();
      }
    }
  });
});
