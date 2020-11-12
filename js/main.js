// SMOTH SCROLL
$("body").on('click', '[href*="#"]', function(e){
    var fixed_offset = 50;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 500);
    e.preventDefault();
});

// SWIPER SLIDER
var swiper = new Swiper('.achievements-slider__big', {
  slidesPerView: 1,
  effect: 'fade',
  autoplay: true,
  navigation: {
    nextEl: '.achievements__big-next',
    prevEl: '.achievements__big-prev',
  },
  pagination: {
    el: '.custom-progressbar',
    type: 'progressbar',
  },
});

var swiper = new Swiper('.achievements-slider__small', {
  slidesPerView: 6,
  spaceBetween: 30,
  navigation: {
    nextEl: '.achievements__small-next',
    prevEl: '.achievements__small-prev',
  },
  breakpoints: {
   320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 40,
    }
  }
});

var swiper = new Swiper('.page-about-us__slider', {
  slidesPerView: 1,
  autoplay: true,
  loop: true,
  navigation: {
    nextEl: '.page-about-us-next',
    prevEl: '.page-about-us-prev',
  },
});


// ABOUT US
$('.about-us__digital-link_show').click(function() { 
  $(this).hide();
  $('.about-us__digital-imgs_all').toggleClass('about-us__digital-imgs_all-visible');
  $('.about-us__digital-link_hide').show();
  return false; 
});

$('.about-us__digital-link_hide').click(function() { 
  $(this).hide();
  $('.about-us__digital-imgs_all').toggleClass('about-us__digital-imgs_all-visible');
  $('.about-us__digital-link_show').show();
  return false; 
});

// TOGGLE HUMB
$('.toggle-menu').click(function() { 
  $(this).toggleClass('on');
  $('.mobile-menu').toggleClass('active');
  $('.header').toggleClass('active');
  $('body').toggleClass('lock');
  return false; 
});

// ACCORDION
$(document).ready(function() {  
  
  var name = $('.accordion__name'),
      content = $('.accordion__content');

      name.first().addClass('active')
      content.first().show();
  
  name.on('click', function() {
    if(!$(this).hasClass('active')) {
      name.removeClass('active').next().slideUp(200);
      $(this).addClass('active').next().slideDown(200);
    } else {
      $(this).removeClass('active').next().slideUp(200);
    }
  });
  
});

// TO TOP
$(document).ready(function() {
  var $toTop = $('.toTop');
  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 750) {
      $toTop.addClass('active');
    } else {
      $toTop.removeClass('active');
    }
  });
   
$toTop.on('click', function() {
  $('html, body').animate({scrollTop:0}, 1000);
})
});

// HEADER COLLAPSED
$(document).ready(function() {
var $header_col = $('.header');
$(window).on('scroll', function() {
  if ($(this).scrollTop() > 550) {
    $header_col.addClass('header_collapsed');
  } else {
    $header_col.removeClass('header_collapsed');
  }
});
});

// TABS
$(document).ready(function() {
  var tab = $('.tabs-menu__tab');
  var content = $('.tabs-content__item');
  
  tab.first().addClass('active');
  content.not(':first').hide();
  
  tab.on('click', function(){
    tab.removeClass('active').eq($(this).index()).addClass('active');
    content.hide().eq($(this).index()).show();
  });
});
