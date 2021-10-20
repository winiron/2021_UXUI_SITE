$(window).scroll(function(){
    let scrollY = $(window).scrollTop();
    if(scrollY > 200){
        $("#header").addClass("fixed-top")
    }else{
        $("#header").removeClass("fixed-top")
    }
});


// 포트폴리오 영역 ∴ isotope.js
const btns = $("#portfolio .btn-group .btn");
btns.click(function(){
    let index = $(this).index(); 

    btns.removeClass("active");
    btns.eq(index).addClass("active");

    let selector = btns.eq(index).attr("data-filter");
    console.log(selector);

    $("#portfolio .row").isotope({ filter:selector });
});

window.onload = function(){
    $("#portfolio .btn-group #btn1").trigger("click");    
};

$("#portfolio .row .popup_link").magnificPopup({type:"image"});


$("#customer .owl-carousel").owlCarousel({
    loop:true,
    margin:10,
    responsive:{
        0:{items:1},
        768:{items:2}
    }
});