const swiper = new Swiper('.swiper-recipes', {
  // Optional parameters
  loop: true,
  slidesPerView: 2,
  spaceBetween: 17,

  breakpoints: {
    // when window width is >= 480px
    480: {
      slidesPerView: 2.3,
      spaceBetween: 20
    },
    1700: {
      slidesPerView: 3.3,
      spaceBetween: 20
    },
    1920: {
      slidesPerView: 4.3,
      spaceBetween: 20
    }
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.recipe-button-prev',
  },

});