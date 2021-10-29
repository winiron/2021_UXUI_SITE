$(window).scroll(function(){
  let scrollY = $(window).scrollTop();
  if(scrollY > 100) {
    $("#header").addClass("fixed-top");
  } else {
    $("#header").removeClass("fixed-top");
  }  
});

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 30000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

$('#icon .owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  // nav:true,
  responsive:{
      0:{
          items:1
      },
      768:{
          items:3
      }
  }
})