// Pre-loader
var loader = document.getElementById("pre-loader");
window.addEventListener("load", function () {
  setTimeout(function () {
    loader.style.display = "none";
  }, 600);
});

// Scroll-to-Top
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

// Copy link
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

function copyLink() {
  navigator.clipboard
    .writeText("https://med6ba.github.io/noor-al-houda")
    .then(() => alert("تم نسخ الرابط!"))
    .catch((err) => console.error("Error copying link: ", err));
}

// Define min and max font sizes (in pixels)
const minFontSize = 20; // Minimum font size
const maxFontSize = 60; // Maximum font size

// Function to zoom in the font size
function zoomIn() {
  let content = document.querySelector(".zoom-content");
  let currentSize = window.getComputedStyle(content).fontSize;
  let newSize = parseFloat(currentSize) * 1.1; // Increase font size by 10%

  // Check if new size is within the max limit
  if (newSize <= maxFontSize) {
    content.style.fontSize = newSize + "px";
  }
}

// Function to zoom out the font size
function zoomOut() {
  let content = document.querySelector(".zoom-content");
  let currentSize = window.getComputedStyle(content).fontSize;
  let newSize = parseFloat(currentSize) / 1.1; // Decrease font size by 10%

  // Check if new size is within the min limit
  if (newSize >= minFontSize) {
    content.style.fontSize = newSize + "px";
  }
}
