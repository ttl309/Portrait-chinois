
$(document).ready(function(){

  // POPUP
      $(".open").click(function () {
        $(".popup").fadeIn(500);
    });
      
      $(".background, .close").click(function () {
        $(".popup").fadeOut(500);
    });

    // SLIDER
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        fade: true,
        asNavFor: '.slider-nav',
      });

      $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        centerPadding:'0',
      });
  });