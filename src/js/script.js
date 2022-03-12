$(document).ready(function () {
  $('.hero__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    infinite: true,
    nextArrow: $('.slider-next'),
    prevArrow: $('.slider-prev')
  });
});