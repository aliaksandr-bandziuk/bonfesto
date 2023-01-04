const swiper = new Swiper('.swiper-recipes', {
  // Optional parameters
  loop: true,
  slidesPerView: 2,
  spaceBetween: 17,
  // initialSlide: 4,
  

  breakpoints: {
    // when window width is >= 480px
    480: {
      slidesPerView: 2.6,
      spaceBetween: 19,
      // width: 393,
    },
    1424: {
      slidesPerView: 2.6,
      spaceBetween: 19,
    },
    1700: {
      slidesPerView: 3.3,
      spaceBetween: 19
    },
    1920: {
      slidesPerView: 4.3,
      spaceBetween: 19
    }
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.recipe-button-prev',
  },

});