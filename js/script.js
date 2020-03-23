var popup = document.querySelector('.popup');
var popupClose = popup.querySelector('.close-cross');
var popupOpen = document.querySelector('.writeus-button');

popupOpen.addEventListener('click', function(evt) {
  evt.preventDefault();
  popup.classList.add('popup-open');
});

popupClose.addEventListener('click', function() {
  popup.classList.remove('popup-open');
  }
);
