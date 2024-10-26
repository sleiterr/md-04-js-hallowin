const imgModal = document.querySelector("#modal");
const imgGall = document.querySelector(".img");
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

