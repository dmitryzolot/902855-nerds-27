var popup = document.querySelector('.popup');
var popupClose = popup.querySelector('.close-cross');
var popupOpen = document.querySelector('.writeus-button');
var popupForm = popup.querySelector('form');
var formSubmit = popup.querySelector('.popup-submit');

var nameInput = popup.querySelector('#name');
var emailInput = popup.querySelector('#email');
var textArea = popup.querySelector('#text');


function openButtonClickHandler (evt) {
  evt.preventDefault();
  popup.classList.add('popup-open');
  nameInput.focus();
};

function closeButtonClickHandler () {
  popup.classList.remove('popup-open');
  popup.classList.remove('popup-error');
  popupForm.reset();
};

popupOpen.addEventListener('click', function(evt) {
  openButtonClickHandler(evt);
});

popupClose.addEventListener('click', closeButtonClickHandler);

popupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    closeButtonClickHandler();
  }
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    closeButtonClickHandler();
  }
});

function checkInputLength () {
  if (emailInput.value === '' || nameInput.value.length === '' || textArea.value === '') {
    popup.classList.remove('popup-error');
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add('popup-error');
  }
};

formSubmit.addEventListener('click', checkInputLength);
