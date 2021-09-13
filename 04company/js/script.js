$(".slider").bxSlider();


// // jQuery에서의 이벤트 작성 4가지 방법
// $("toggleMenu").on("EventName",Listener);
// $("toggleMenu").on("click",function(){});
// $("toggleMenu").click(function(){});// jQuery에서의 이벤트 작성 . 축약형

//클래스 삽입 & 삭제하기
$(".toggleMenu").click(function(){
    const toggle = $(".toggleMenu").attr("class");//value toggle
    // console.log(toggle);
    if(toggle == "toggleMenu") {
        // $(".toggleMenu").addClass("active");//jQuery
        document.getElementsByClassName("toggleMenu")[0].classList.add("active");
        $(".mainMenu").addClass("view");
    }else{
        // $(".toggleMenu").removeClass("active");//jQuery
        document.getElementsByClassName("toggleMenu")[0].classList.remove("active");
        $(".mainMenu").removeClass("view");
    }
    $(window).resize(function(){
        $(".mainMenu").removeClass("view");
        $(".toggleMenu").removeClass("active")
    });
});