$(document).on("ready",function(){
    $("nav ul li").on("click",function(){
    console.log( $(this).siblings());
        $(this).addClass("active").siblings().removeClass("active");
    })
    let lock=true;
    $(".xl").on("click",function(){
        if(lock==true){
            $(".nav").slideDown();
            lock=false;
        }else{
            $(".nav").slideUp();
            lock=true;
        }
    })
    let lock1=true;
    $(".end").on("click",function(){
        if(lock1==true){
            $(".wei").css("top","0px");
            $(this).find("img").attr("src","http://cpro.baidustatic.com/cpro/ui/noexpire/img/toggle_btn_bk1.png")
            lock1=false;
        }else{
            $(".wei").css("top","100px");
            $(this).find("img").attr("src","http://cpro.baidustatic.com/cpro/ui/noexpire/img/toggle_btn_bk2.png")
            lock1=true;
        }
    })
})