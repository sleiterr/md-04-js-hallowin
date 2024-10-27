// MODAL-IMG.JS

const imgModal = document.querySelector("#modal");
const imgGall = document.querySelectorAll(".img");
const imgInModal = document.querySelector("#modal-img");
const btnClose = document.querySelector("#btn-close");

btnClose.addEventListener("click", () => {
  imgModal.classList.remove("show");
});

window.addEventListener("click", (e) => {
  if (e.target === imgModal) {
    imgModal.classList.remove("show");
  }
});

imgGall.forEach((element) => {
  element.addEventListener("click", (e) => {
    let imgSrc = e.target.getAttribute("src");
    imgInModal.setAttribute("src", imgSrc);
    imgModal.classList.add('show')
  });
});
