'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const btnsShowModal = document.querySelectorAll('.show-modal');
console.log(btnsShowModal);

const showModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const hideModel = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener('click', showModal);
}
btnCloseModal.addEventListener('click', hideModel);
overlay.addEventListener('click', hideModel);

document.addEventListener('keydown', function (e) {
  if (e.key == 'Escape' && !modal.classList.contains('hidden')) {
    hideModel();
  }
});
