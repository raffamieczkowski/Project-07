(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-students-open]'),
    closeModalBtn: document.querySelector('[data-modal-students-close]'),
    modal: document.querySelector('[data-modal-students]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden-students');
  }
})();
