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


//navBar 영역 

let winWidth = 0; // 화면 너비 
        

// 리사이즈 함수 생성
$(window).resize(function(){
    winSize(); // winSize() 함수 실행
    console.log(winWidth);
})

// winSize() 함수 생성
function winSize() {
    winWidth = $(window).width(); // 화면 너비 산출
    let onView = true; 
    if(winWidth < 768){ // 화면 너비 768보다 작으면 
        $(".navbar-toggler").click(function() {
            if(onView == true){
                $(".navbar").addClass("onView")
                onView = false;
            } else {
                $(".navbar").removeClass("onView");
                onView = true;
            }
        });
    }else{
        $(".navbar").removeClass("onView");
        $(".navbar-collapse").removeClass("show");
    }
}

winSize();// winSize() 함수 실행

//스크롤 함수 
$(window).scroll(function() {
    let scrollY = $(window).scrollTop();
    console.log(scrollY)
    if(scrollY > 100){
        $(".navbar").addClass("fixed-top bg-dark px-lg-5")
    }else {
        $(".navbar").removeClass("fixed-top bg-dark px-lg-5")
    }
});