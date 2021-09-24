let layer = document.querySelectorAll(".layer");


window.addEventListener("scroll",function(){
    
    // console.log(scroll);

    layer.forEach(function(item, index){
        //data-speed 값 , 스크롤 값 =>  item의 style.trnaform
        let scroll = window.pageYOffset;
        let speed = item.dataset.speed;

        item.style.transform = `translateY(${scroll/speed*4}px)`;
    });
});