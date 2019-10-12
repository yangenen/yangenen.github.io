$(document).on("ready",function(){
    let lock=true;
    $(".menu").on("click",function(){
        if(lock==true){
            $(this).css("transform","rotate(540deg)");
            $(".menu-box").slideDown();
            lock=false;
        }else{
            $(this).css("transform","rotate(0deg)");
            $(".menu-box").slideUp();
            lock=true;
        }
    })
    let time=setInterval(function(){
        if($("html").scrollTop()>=300){
            $(".ce").css("display","block");
        }else{
            $(".ce").css("display","none");
        }
    },1000)
    $(".top").on("click",function(){
        $("html").animate({scrollTop:0}, 500);
    })
})