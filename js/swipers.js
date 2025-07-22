export default function initSwipers() {
  let swiperAdvantages = null;

  //слайдер карточек продуктов на главной

  const productsSlider = new Swiper(".products__wrapper__slider", {
    // Default parameters
    loop: true,
    slidesPerView: 4,
    spaceBetween: 32,

    navigation: {
      nextEl: ".custom-next",
      prevEl: ".custom-prev",
    },
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1.5,
        spaceBetween: 20,
        loop: true,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1.5,
        spaceBetween: 20,
        loop: true,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
        loop: true,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 20,
        loop: true,
      },
      1300: {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
      },
      1570: {
        slidesPerView: 4,
        spaceBetween: 32,
        loop: true,
      },
    },
  });

  function initSwiperIfNeeded() {
    if (window.innerWidth <= 768 && !swiperAdvantages) {
      swiperAdvantages = new Swiper(".swiper__advantages", {
        slidesPerView: 1,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
        },
      });
    } else if (window.innerWidth > 768 && swiperAdvantages) {
      swiperAdvantages.destroy(true, true);
      swiperAdvantages = null;
    }
  }

  window.addEventListener("load", initSwiperIfNeeded);
  window.addEventListener("resize", initSwiperIfNeeded);

  const mobileProductImagesSwiper = new Swiper(".product__mobile__swiper", {
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: ".custom-next",
      prevEl: ".custom-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

  const productImagesSwiper = new Swiper(".product__images__swiper", {
    // Optional parameters

    spaceBetween: 24,
    slidesPerView: 4,

    // Navigation arrows
    navigation: {
      nextEl: ".custom-next",
      prevEl: ".custom-prev",
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
      1000: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1300: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1480: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
    },

    // And if we need scrollbar
  });
}
