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

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const formData = {
      name: document.getElementById("name").value,
      age: document.getElementById("age").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    // Send form data as JSON via Fetch API
    fetch("https://your-backend-url.com/api/contact", {
      // Replace with your actual backend URL
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        document.getElementById("success-message").style.display = "block";
      })
      .catch((error) => {
        console.error("Error:", error);
        document.getElementById("error-message").style.display = "block";
      });
  });
