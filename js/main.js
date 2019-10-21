$(document).ready(function () {
   $('.slider').slick({
      arrows: true,
      prevArrow: '<div class="slider-arrow slider-arrow_left"><div>',
      nextArrow: '<div class="slider-arrow slider-arrow_right"><div>',
      swipe: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1
   });
});


/* let quantityPlusBtn  = document.getElementById('quantity__button_plus'),
    quantityMinusBtn = document.getElementById('quantity__button_minus'),
    quantityCount    = document.getElementById('quantity__index');

quantityPlusBtn.onclick = function () {
   let quantity = parseInt(quantityCount.value);
   if (quantity < 10) {
      quantity = quantity + 1;
      quantityCount.value = quantity;
   }
}

quantityMinusBtn.onclick = function () {
   let quantity = parseInt(quantityCount.value);
   if (quantity > 1) {
      quantity = quantity - 1;
      quantityCount.value = quantity;
   }
} */


/* function bindEvent(callback, eventType, targets) {
   targets.forEach(function (target) {
      target.addEventListener(eventType, callback);
   });
};


let buttonPlus = document.querySelectorAll('.quantity__button_plus');
let buttonMinus = document.querySelectorAll('.quantity__button_minus');
let quantityCount = document.querySelectorAll('.quantity__index');

bindEvent(function () {
   let quantity = parseInt(quantityCount.value);
   if (quantity < 10) {
      quantity = quantity + 1;
      quantityCount.value = quantity;
   }
}, 'click', buttonPlus);

bindEvent(function () {
   let quantity = parseInt(quantityCount.value);
   if (quantity > 1) {
      quantity = quantity - 1;
      quantityCount.value = quantity;
   }
}, 'click', buttonMinus); */

// Количество товара

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


// Модальное окно

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