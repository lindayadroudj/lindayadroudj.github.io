const swiperHero = new Swiper('.hero__swiper', {
    slidesPerView: 1.15,
    spaceBetween: 0,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },

    breakpoints: {
        1220: {
          slidesPerView: 1,
          
        }
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

});

const testimonialSwiper = new Swiper('.testimonials__swiper', {
    slidesPerView: 1.15,
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },

    breakpoints: {
        575.98: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        767.98: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        1199.98: {
          slidesPerView: 4,
          spaceBetween: 40
        }
    },

});

const swiperCarousel = new Swiper('.extra-cost__swiper', {
    slidesPerView: 1.15,
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
    },

    breakpoints: {
        575.98: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        767.98: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        1199.98: {
          slidesPerView: 4,
          spaceBetween: 40
        }
    },
  
  });
