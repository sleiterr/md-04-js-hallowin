// GALLERY.JS

const gallery = document.querySelector(".gallery-wrapper");

let img = [
  "../imgages/halloween-4.jpg",
  "../imgages/halloween-5.jpg",
  "../imgages/halloween-6.jpg",
  "../imgages/halloween-7.jpg",
  "../imgages/halloween-8.jpg",
  "../imgages/halloween-9.jpg",
  "../imgages/halloween-10.jpg",
  "../imgages/halloween-11.jpg",
  "../imgages/halloween-12.jpg"
];

img.forEach(element => {
  gallery.innerHTML += `<img src='${element}' class='img'>`;
});


