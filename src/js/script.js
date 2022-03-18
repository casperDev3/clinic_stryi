let slider = $(document).ready(function () {
  $('.hero__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    infinite: true
  });
});

$(document).ready(function(){
  $('.header__burger').click(function(event){
      $('.header__burger, .header__info').toggleClass('toggled');
  });
});

