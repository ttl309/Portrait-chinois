const open = document.querySelector('.open');
const background =document.querySelector('.background');
const close = document.querySelector('.close');
const popup = document.querySelector('.popup');

open.addEventListener('click',() => popup.classList.add('popup-open'));
background.addEventListener('click',() => popup.classList.remove('popup-open'));
close.addEventListener('click',() => popup.classList.remove('popup-open'));




$(document).ready(function(){
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