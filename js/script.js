const slide = document.querySelector(".image-in-slide");
const iconsRight = document.querySelector(".icons-right");
const iconsLeft = document.querySelector(".icons-left");

let currentImageIndex = 0;

let images = [
  "../imgages/hero/halloween-1.jpg",
  "../imgages/hero/halloween-2.png",
  "../imgages/hero/halloween-3.jpg",
];

function setActiveSlide() { 
  slide.src = images[currentImageIndex]
}

setActiveSlide();

//! NEX-BTN

function next() { 
  if (currentImageIndex >= images.length - 1) {
    currentImageIndex = 0;
  } else { 
    currentImageIndex++;
  }

  setActiveSlide();

}

iconsRight.addEventListener('click', next);

//! LEFT-BTN

function previous() { 
  if (currentImageIndex === 0) {
    currentImageIndex = images.length - 1;
  } else { 
    currentImageIndex--;
  }

  setActiveSlide();
}

iconsLeft.addEventListener('click', previous);

setInterval(next, 4000);

