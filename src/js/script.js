let slider = $(document).ready(function () {
  $('.hero__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    infinite: true
  });
});

let slider_logo = $(document).ready(function () {
  $('.partners__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    infinite: true,
    variableWidth: true,
    focusOnSelect: true,
    autoplay: true,
    centerMode: true,
    autoplaySpeed: 3500
    
  });
});

let slider_team = $(document).ready(function () {
  $('.team__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    centerMode: true,
    arrows: false,
    variableWidth: true,
    infinite: true
  });
});


$(document).ready(function(){
  $('.header__burger').click(function(event){
      $('.header__burger, .header__info').toggleClass('toggled');
  });
});

