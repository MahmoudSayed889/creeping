const gameSwiper = new Swiper('.games-slider .swiper-container', {
    // Optional parameters
    loop: true,
    slidesPerView: 4,
    spaceBetween: 20,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // autoplay: {
    //     delay: 5000,
    // },

    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },

});

const watchSwiper = new Swiper('#watch .swiper-container', {

  loop: true,

  
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // autoplay: {
  //     delay: 5000,
  // },

  
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    800: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    1000: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    1200: {
      slidesPerView: 4,
      spaceBetween: 20
    },
    1400: {
      slidesPerView: 5,
      spaceBetween: 20
    }
  },


  keyboard: {
      enabled: true,
      onlyInViewport: false,
  },

});