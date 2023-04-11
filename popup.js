const POPUP_OPENED_CLASSNAME = 'popup_open';

const popupNode = document.querySelector('.js-popup');
const btnOpenNode = document.querySelector('.js-btn');
const btnCloseNode = document.querySelector('.js-popup__close-btn');

btnOpenNode.addEventListener('click', togglePopup);
btnCloseNode.addEventListener('click', togglePopup);


function togglePopup() {
    popupNode.classList.toggle(POPUP_OPENED_CLASSNAME);
}
