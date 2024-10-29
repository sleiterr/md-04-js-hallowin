// EVENT-REGISTRETION-FORM

(() => {
  const modalReg = {
    openBtn: document.querySelector("#sign"),
    closeBtn: document.querySelector("#modal-close"),
    modal: document.querySelector("#modal-window"),
  };

  if (modalReg.openBtn && modalReg.closeBtn && modalReg.modal) {
    modalReg.openBtn.addEventListener("click", toggleModal);
    modalReg.closeBtn.addEventListener("click", toggleModal);
  }

  function toggleModal() {
    modalReg.modal.classList.toggle("is-hidden");
  }
})();
