// Pre-loader
var loader = document.getElementById("pre-loader");
window.addEventListener("load", function () {
  setTimeout(function () {
    loader.style.display = "none";
  }, 0);
});

// Scroll-to-Top button
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

// Define min and max font sizes (in pixels)
const minFontSize = 12; // Minimum font size
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

// Dark/light mode script
document.addEventListener("DOMContentLoaded", () => {
  let darkmode = localStorage.getItem("dark-mode");
  const themeSwitch = document.getElementById("theme-switch");
  const basmalahImg = document.querySelector(".basmalah");

  console.log("Script loaded"); // Debugging
  console.log("Image element:", basmalahImg); // Debugging

  const enableDarkmode = () => {
    document.body.classList.add("dark-mode");
    localStorage.setItem("dark-mode", "active");

    if (basmalahImg) {
      basmalahImg.src = "../../images/dark-mode-image.png"; // Update with actual dark mode image
      console.log("Dark mode enabled - Image changed to dark mode");
    }
  };

  const disableDarkmode = () => {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("dark-mode", "inactive");

    if (basmalahImg) {
      basmalahImg.src = "../../images/light-mode-image.png"; // Update with actual light mode image
      console.log("Light mode enabled - Image changed to light mode");
    }
  };

  // Apply correct mode on page load
  if (darkmode === "active") {
    enableDarkmode();
  } else {
    disableDarkmode();
  }

  // Toggle mode on button click
  themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem("dark-mode");
    if (darkmode !== "active") {
      enableDarkmode();
    } else {
      disableDarkmode();
    }
  });
});

// Share content function
function shareContent() {
  if (navigator.share) {
    navigator
      .share({
        title: "نور الهدى",
        url: "https://nooralhouda.vercel.app",
      })
      .catch(console.error);
  } else {
    alert("المشاركة غير مدعومة على متصفحك.");
  }
}
