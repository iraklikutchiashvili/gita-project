$(".aboutBtn").on("click", function(){
    $("div.about-box > p").css("display", "block");
    $(".icons-box").css("visibility", "hidden");
    $(this).addClass("btn-dark");
    $(".socialBtn").removeClass("btn-dark");
});

$(".socialBtn").on("click", function(){
    $("div.about-box > p").css("display", "none");
    $(".icons-box").css("visibility", "visible");
    $(this).addClass("btn-dark");
    $(".aboutBtn").removeClass("btn-dark");
});