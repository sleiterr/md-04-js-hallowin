
// MODAL-ABOUT

(() => {
  const modal = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  modal.openModalBtn.addEventListener("click", toggleModal);
  modal.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    modal.modal.classList.toggle("is-hidden");
  }
})();


