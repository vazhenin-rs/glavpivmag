/* === Скрипт для Slick Slider === */
$(document).ready(function () {
   $('.slider').slick({
      arrows: true,
      prevArrow: '<div class="slider-arrow slider-arrow_left"><div>',
      nextArrow: '<div class="slider-arrow slider-arrow_right"><div>',
      swipe: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
         {
            breakpoint: 768,
            settings: {
               swipe: true,
               slidesToShow: 2
            }
         },
         {
            breakpoint: 576,
            settings: {
               slidesToShow: 1
            }
         }
      ]
   });
});
/* === / Скрипт для Slick Slider === */


/* === Количество товара === */

let buttonPlus    = document.querySelectorAll('.quantity__button_plus'),
    buttonMinus   = document.querySelectorAll('.quantity__button_minus'),
    quantityCount = document.querySelectorAll('.quantity__index');

for (var a = 0; a < buttonPlus.length; a++) {
   let arrIndex = a;
   buttonPlus[a].addEventListener('click', function () {
      let quantity = parseInt(quantityCount[arrIndex].value);
      if (quantity < 10) {
         quantity = quantity + 1;
         quantityCount[arrIndex].value = quantity;
      }
   });
}

for (var b = 0; b < buttonMinus.length; b++) {
   let arrIndex = b;
   buttonMinus[b].addEventListener('click', function () {
      let quantity = parseInt(quantityCount[arrIndex].value);
      if (quantity > 1) {
         quantity = quantity - 1;
         quantityCount[arrIndex].value = quantity;
      }
   });
}
/* === / Количество товара === */

/* === Модальное окно === */

let popupButton      = document.querySelector(".button-write-us"),
    popupCloseButton = document.querySelector(".modal__close"),
    popupOverlay     = document.querySelector(".overlay"),
    popupForm        = document.querySelector(".modal-wrap");

popupButton.addEventListener("click", function (evt) {
   evt.preventDefault();
   if (popupOverlay.classList.contains('fadeOut')) {
      popupOverlay.classList.remove('fadeOut');
      popupForm.classList.remove('slideOutDown');

      popupOverlay.classList.add('modal__show', 'fadeIn');
      popupForm.classList.add('slideInUp');
   }
   else {
      popupOverlay.classList.add('modal__show', 'fadeIn');
      popupForm.classList.add('slideInUp');
   }
});

popupCloseButton.addEventListener("click", function (evt) {
   evt.preventDefault();
   popupForm.classList.remove('slideInUp');
   popupForm.classList.add('slideOutDown');
   popupOverlay.classList.add('fadeOut');
   setTimeout(function () {
      popupOverlay.classList.remove("modal__show");
   }, 1000);
   
});

/* === / Модальное окно === */

/* === Кнопка мобильной навигации === */

let mobileIcon       = document.querySelector('.main-navigation__mobile-icon'),
    mobileIconLines  = document.querySelector('.mobile-icon'),
    mobileNavigation = document.querySelector('.main-navigation__mobile-wrapper');

mobileIcon.addEventListener("click", function(){
   mobileIconLines.classList.toggle('mobile-icon-active');
   mobileNavigation.classList.toggle('main-navigation__mobile-wrapper--active');
});

/* === / Кнопка мобильной навигации === */