import Swiper from "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js";
window.onload = function () {
  myFunction();
};
let myVar
function myFunction() {
  myVar = setTimeout(showPage);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

const button = document.querySelector(".formButton");
button.addEventListener("click", () => {
  button.textContent = "Thank you for submitting your information😃";
});

const swiper = new Swiper(".swiper", {
  // Optional parameters

  slidesPerView: 4,
  spaceBetween: 30,
  centeredSlides: true,
  breakpoints: {
    240: {
      centeredSlides: true,
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
const swipers = new Swiper(".swipers", {
  // Optional parameters

  slidesPerView: 4,
  spaceBetween: 30,
  centeredSlides: true,
  breakpoints: {
    240: {
      centeredSlides: true,
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
const swiper2 = new Swiper(".sample-slider", {
  loop: true,
  speed: 2000,
  slidesPerView: 3,
  breakpoints: {
    240: {
      centeredSlides: true,
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },

  autoplay: {
    delay: 0,
  },
});
const swiper3 = new Swiper(".sample-slider2", {
  loop: true,
  speed: 2000,
  slidesPerView: 3,
  breakpoints: {
    240: {
      centeredSlides: true,
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },

  autoplay: {
    delay: 0,
  },
});
