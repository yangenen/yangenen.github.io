$(document).on("ready",function(){
    let num=60;
    let timer=setInterval(function(){
        --num;
        if(num<0){
            num=60;
        }
        $(".s").html(num);
    },1000)
})