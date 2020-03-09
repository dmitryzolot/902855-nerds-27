var popup = document.querySelector('.popup-form');
var popupClose = document.querySelector('.popup-close');
var popupOpen = document.querySelector('.writeus-button');

popup.classList.remove('popup-form--open');

popupOpen.addEventListener('click', function() {
  popup.classList.add('popup-form--open');
  }
);

popupClose.addEventListener('click', function() {
  popup.classList.remove('popup-form--open');
  }
);
