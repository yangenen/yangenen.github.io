$(document).on("ready",function(){
    $.ajax({
        type:"get",
        url:"data/vip0.json",
        async:true,
        success:function(res){
            console.log(res);
            let html="";
            for(i=0;i<res.main0.length;i++){
                let txt="";
                for(j=0;j<res.main0[i].main.length;j++){
                    txt+="<div class='col-md-2 col-sm-4 col-xs-6'><div><img src="+res.main0[i].main[j].img+"><h4>"+res.main0[i].main[j].h4+"</h4><p class='p0'>"+res.main0[i].main[j].p0+"</p></div><div class='sc'><img src="+res.main0[i].main[j].src+"><h6>"+res.main0[i].main[j].h6+"</h6><p>简介：</p><p class='p1'>"+res.main0[i].main[j].p1+"</p></div></div>";
                }
                html+="<div class='row'><h2>"+res.main0[i].h2+"</h2>"+txt+"</div><img class='gg' src="+res.main0[i].gg+">";
            }
            $(".main").html(html);
        }
    })
    if($("html").width()>=1200){
        $(".nav-left").children().eq(1).on("click",function(){
            $("html").animate({scrollTop:560}, 500);
        })
        $(".nav-left").children().eq(2).on("click",function(){
            $("html").animate({scrollTop:1750}, 500);
        })
        $(".nav-left").children().eq(3).on("click",function(){
            $("html").animate({scrollTop:2620}, 500);
        })
        $(".nav-left").children().eq(4).on("click",function(){
            $("html").animate({scrollTop:3520}, 500);
        })
        $(".nav-left").children().eq(5).on("click",function(){
            $("html").animate({scrollTop:4420}, 500);
        })
    }else if($("html").width()>=750){
        $(".nav-left").children().eq(1).on("click",function(){
            $("html").animate({scrollTop:520}, 500);
        })
        $(".nav-left").children().eq(2).on("click",function(){
            $("html").animate({scrollTop:1520}, 500);
        })
        $(".nav-left").children().eq(3).on("click",function(){
            $("html").animate({scrollTop:2280}, 500);
        })
        $(".nav-left").children().eq(4).on("click",function(){
            $("html").animate({scrollTop:3044}, 500);
        })
        $(".nav-left").children().eq(5).on("click",function(){
            $("html").animate({scrollTop:3800}, 500);
        })
    }else if($("html").width()>=400){
        $(".nav-left").children().eq(1).on("click",function(){
            $("html").animate({scrollTop:300}, 500);
        })
        $(".nav-left").children().eq(2).on("click",function(){
            $("html").animate({scrollTop:3140}, 500);
        })
        $(".nav-left").children().eq(3).on("click",function(){
            $("html").animate({scrollTop:4788}, 500);
        })
        $(".nav-left").children().eq(4).on("click",function(){
            $("html").animate({scrollTop:6725}, 500);
        })
        $(".nav-left").children().eq(5).on("click",function(){
            $("html").animate({scrollTop:8673}, 500);
        })
    }else if($("html").width()>=320){
        $(".nav-left").children().eq(1).on("click",function(){
            $("html").animate({scrollTop:280}, 500);
        })
        $(".nav-left").children().eq(2).on("click",function(){
            $("html").animate({scrollTop:2614}, 500);
        })
        $(".nav-left").children().eq(3).on("click",function(){
            $("html").animate({scrollTop:3960}, 500);
        })
        $(".nav-left").children().eq(4).on("click",function(){
            $("html").animate({scrollTop:5555}, 500);
        })
        $(".nav-left").children().eq(5).on("click",function(){
            $("html").animate({scrollTop:7144}, 500);
        })
    }
})