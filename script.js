let swiper = new Swiper(".swiper", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",

    },
    pagination: {
      el: ".swiper-pagination",
    },
    keyboard: true,
  });

  let btnNext = document.querySelector('.swiper-button-next');
  let btnPrev = document.querySelector('.swiper-button-prev');

  btnNext.style.color = '#fff';
  btnPrev.style.color = '#fff';

  
  