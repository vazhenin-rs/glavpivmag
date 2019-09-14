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