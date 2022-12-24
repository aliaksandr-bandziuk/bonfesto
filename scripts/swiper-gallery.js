const swiperGallery = new Swiper('.swiper-gallery', {
  // Optional parameters
  loop: true,
  slidesPerView: 1.4,
  spaceBetween: 20,

  breakpoints: {
    480: {
      slidesPerView: 3.6,
      spaceBetween: 20
    },
    1700: {
      slidesPerView: 4.3,
      spaceBetween: 20
    },
    1920: {
      slidesPerView: 5,
      spaceBetween: 20
    }
  },

  loop: true,
  autoplay: {
    delay: 1,
    disableOnInteraction: true
  },
  freeMode: true,
  speed: 5000,
  freeModeMomentum: false,

});