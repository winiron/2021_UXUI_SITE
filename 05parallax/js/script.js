let layer = document.querySelectorAll(".layer");


window.addEventListener("scroll",function(){
    
    // console.log(scroll);
    let scroll = window.pageYOffset;

    layer.forEach(function(item, index){
        // ①data-speed 값  ②스크롤 값 ⇨ item의 style.trnaform
        let speed = item.dataset.speed; // div.layer data-speed 값

        // item : document.querySelectorAll("layer")[0]~[8]
        item.style.transform = `translate3d(0,${scroll/speed*4}px,0)`;
    });
});