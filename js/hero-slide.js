const slide = document.querySelector(".image-in-slide");
const iconsRight = document.querySelector(".icons-right");
const iconsLeft = document.querySelector(".icons-left");

let currentImageIndex = 0;
let intervalSet = null;

//! NEX-BTN

function next() {
  if (currentImageIndex >= images.length - 1) {
    currentImageIndex = 0;
  } else {
    currentImageIndex++;
  }

  setActiveSlide();
}

iconsRight.addEventListener("click", next);

//! LEFT-BTN

function previous() {
  if (currentImageIndex === 0) {
    currentImageIndex = images.length - 1;
  } else {
    currentImageIndex--;
  }

  setActiveSlide();
}

iconsLeft.addEventListener("click", previous);

//! SET INTERVAL FOR CHECKING VIEWPORT WIDTH (VW) SCREEN

function startInterval() {
  if (window.innerWidth > 425 && !intervalSet) {
    intervalSet = setInterval(next, 5000);
  }
}

function clearSlideInterval() {
  if (intervalSet) {
    clearInterval(intervalSet);
    intervalSet = null;
  }
}

// Initial check on page load
startInterval();

// Handle window resizing
window.addEventListener("resize", () => {
  images = getImages()
  setActiveSlide()

  if (window.innerWidth > 425) {
    startInterval();
  } else {
    clearSlideInterval();
  }
});

// setInterval(next, 5000);

//? ***********************************
