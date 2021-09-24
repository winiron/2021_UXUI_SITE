$(document).ready(function(){
    const slider = $(".slider").bxSlider({
        controls:false
    });
    $(".sliderWrap .nextBtn").click(function(){
        slider.goToNextSlide();
    });
    $(".sliderWrap .prevBtn").click(function(){
        slider.goToPrevSlide();
    });



    // $(".toggle").on("이벤트명",리스너);
    // $(".toggle").on("click",function(){});
    // $(".toggle").click(function(){})
    $(".toggle").click(function(){
        const toggle = $(".toggle").attr("class"); // value toggle
        console.log(toggle);

        if ( toggle == "toggle") {
            //$(".toggle").addClass("active");
            document.getElementsByClassName("toggle")[0].classList.add("active");
            $(".gnb").addClass("view");
        } else {
            //$(".toggle").removeClass("active");
            document.getElementsByClassName("toggle")[0].classList.remove("active");
            $(".gnb").removeClass("view");
        }
    });

    $(window).resize(function(){
        $(".toggle").removeClass("active");
        $(".gnb").removeClass("view");
    });
   
});
