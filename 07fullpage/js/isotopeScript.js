const btns = $(".btn-group .btn");

btns.click(function(){ 
    let index = $(this).index();
    btns.removeClass("active");
    btns.eq(index).addClass("active");
    let selector = btns.eq(index).attr("data-filter");
    console.log(selector);

    $(".experience .row").isotope({
        filter:selector
    });
});