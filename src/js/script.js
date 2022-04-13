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


$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger, .dropdown_menu, .header').toggleClass('toggled');
  });
});


$(window).on('resize', function () {
  if ($(window).width() < 998) {
    $('.first_level_1').click(function () {
      $('.sub1').toggleClass('clicked');
    });
    $('.first_level_2').click(function () {
      $('.sub2').toggleClass('clicked');
    });
    $('.first_level_3').click(function () {
      $('.sub3').toggleClass('clicked');
    });
    $('.first_level_4').click(function () {
      $('.sub4').toggleClass('clicked');
    });
    $('.first_level_5').click(function () {
      $('.sub5').toggleClass('clicked');
    });
    $('.first_level_6').click(function () {
      $('.sub6').toggleClass('clicked');
    });
  }
});


$(document).ready(function() {
 
  $(".header__main_menu li a").hoverIntent(mousein_triger , mouseout_triger);
   
  });
   
  // expand the height of the container
   
  function mousein_triger(){
  $(this).animate({"height": 200}, 300);
   
  }
   
  // reset the height of the container
   
  function mouseout_triger() {
   
  $(this).animate({"height": 0}, 300);
   
  }

