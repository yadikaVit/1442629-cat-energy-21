var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});


//cats

var buttonBefore = document.querySelector(".example__range-button--before");
var imageBefore = document.querySelector(".example__image--before");
var buttonAfter = document.querySelector(".example__range-button--after");
var imageAfter = document.querySelector(".example__image--after");
var barBefore = document.querySelector(".example__bar");

buttonBefore.addEventListener('click', function() {
  imageBefore.classList.remove("example_modal-close");
  imageBefore.classList.add("example_modal-show");
  imageAfter.classList.add("example_modal-close");
  barBefore.classList.remove("example__bar-after");
  barBefore.classList.add("example__bar");
});

buttonAfter.addEventListener("click", function (evt) {
  imageAfter.classList.remove("example_modal-close");
  imageAfter.classList.add("example_modal-show");
  imageBefore.classList.add("example_modal-close");
  barBefore.classList.remove("example__bar");
  barBefore.classList.add("example__bar-after");
});
