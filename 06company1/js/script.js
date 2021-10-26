const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,
  slidesPerView:1,

  // Navigation arrows
  navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
  }
});

// scroll 이벤트 : scroll 값 구하기
$(window).scroll(function(){
    let scrollY = $(window).scrollTop(); // 자바스크립트 :window.pageYOffset
    console.log(scrollY);

    if(scrollY > 300 ) { // "scrollY"가 300 이상 일 경우 ⇨ ①
        $(".navbar").addClass("fixed-top bg-dark px-lg-5"); // ① 클래스 삽입
    } else {
        $(".navbar").removeClass("fixed-top bg-dark px-lg-5"); // 클래스 삭제
    }
});


$(".navbar-toggler").click(function(){ // ①
    $(".navbar").toggleClass("onView");
});


// 리사이즈 이벤트 
$(window).resize(function(){
    let winWidth = $(window).width();
    console.log(winWidth);
    if (winWidth < 768) { // "winWidth"가 "768" 미만이면 ⇨ ① 실행
        $(".navbar-toggler").click(function(){ // ①
            $(".navbar").toggleClass("onView");
        });
    } else {
        $(".navbar").removeClass("onView");
        $(".navbar-collapse").removeClass("show");
    }
});