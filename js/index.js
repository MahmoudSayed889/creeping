const gameSwiper = new Swiper('.games-slider .swiper-container', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 20,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    autoplay: {
        delay: 5000,
    },

    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },

});

const watchSwiper = new Swiper('#watch .swiper-container', {

  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  autoplay: {
      delay: 7000,
  },

  
  breakpoints: {
    
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    800: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    
    1000: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    
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


$(window).scroll( function(){

  let infoScroll = $(window).scrollTop()

  if( infoScroll >= 300 )
  {
    $(".navbar").addClass("fixed-top , animate__fadeInDown py-2 shadow");
    $("#btnTop").fadeIn()
  
  }
  else
  {
    $(".navbar").removeClass("fixed-top , animate__fadeInDown py-2 shadow");
    $("#btnTop").fadeOut()
  }

})


$("#btnTop").click( function(){

  $("body , html").animate({ scrollTop: 0 } , 1000)
})



$(".scroll-down svg").click( function(e){

  let sectionOffset = $("#games").offset().top;
  
  $("html , body").animate( {scrollTop: sectionOffset} , 1000 );
})

$(document).ready( function(){

  $(".loading").fadeOut(800 , function(){
    $("body").css("overflow","auto");
  });
})


AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: true,
});
