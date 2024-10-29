const imagesDesctop = [
  "./imgages/hero/halloween-1.jpg",
  "./imgages/hero/halloween-2.png",
  "./imgages/hero/halloween-3.jpg",
];

const imagesMobile = [
  "./imgages/hero/halloween-1 -small.jpg",
  "./imgages/hero/halloween-2 -small.png",
  "./imgages/hero/halloween-3 -small.png",
];

function getImages() {
  return window.innerWidth <= 425 ? imagesMobile : imagesDesctop;
}

let images = getImages();

function setActiveSlide() {
  slide.src = images[currentImageIndex];
}

setActiveSlide();
