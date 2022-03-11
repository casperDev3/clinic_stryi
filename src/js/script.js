let slider;

$(document).ready(function(){
  $('.slider').on('init',function(event,slick){
   

  });


  slider = $('.slider').slick({
    slidesToShow: 1,
    arrows: false,
    dots:true,
  });

  slider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
    let count = slick.slideCount;
  });
});

$('#next').on('click',function(){
  slider.slick('slickNext');
})

$('#prev').on('click',function(){
  slider.slick('slickPrev');
})



jQuery('.header__burger').on('click',function(){
jQuery('.header__burger').toggleClass('active');
 jQuery('.header__menu').toggleClass('active');
})

const counters = document.querySelectorAll('.time');
const speed = 600;

counters.forEach( counter => {
   const animate = () => {
      const value = +counter.getAttribute('go-numb');
      const data = +counter.innerText;
     
      const time = value / speed;
     if(data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate);
        }else{
          counter.innerText = value;
        }
     
   }
   
   animate();
});


function showProduct(type){
  if (type == 'all')  {
  $('.tabs__content').addClass('active');
  } 
 else   {
   $('.tabs__content').removeClass('active');
   $(`.tabs__content[data-type=${type}]`).addClass('active');
   }
 }
 $(document).on('click','input[type=radio]',function(){
   let type = $(this).val();
 
   showProduct(type)
 }) 
    showProduct('all')


$(document).ready(function(){
   $('.menu__them').click(function(event) {
      $(this).toggleClass('activer').next().slideToggle(200); 
   });
});




