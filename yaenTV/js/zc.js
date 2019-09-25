// console.log($(".cont-nav"));
$(".cont-nav").on("click",function(){
    $(this).css("background","rgba(67, 214, 255, 0.9)").siblings().css("background","white");
    $(this).css("color","white").siblings().css("color","black");
    $(this).css("fontWeight","bold").siblings().css("fontWeight","normal");
    $(".kuan").eq($(this).index()).css("display","block").siblings().css("display","none");
})


















