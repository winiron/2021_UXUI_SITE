var swiper = new Swiper(".mySwiper",{
    spaceBetween:30,
    centeredSlides:true,
    autoplay: {
      delay:3000,
      disableOnInteraction:false,
    },
    navigation: {
      nextEl:".swiper-button-next",
      prevEl:".swiper-button-prev",
    },
    pagination: {
      el:".swiper-pagination",
      clickable:true,
    },
  });