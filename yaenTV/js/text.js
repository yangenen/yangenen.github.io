$(document).on("ready",function(){
    // console.log($(document).scrollTop());
    $(document).on("scroll",function(){
        if($(document).scrollTop()>=100){
            $(".top-nav").css("display","block");
        }else{
            $(".top-nav").css("display","none");
        }
    })
    $.ajax({
        type:"get",
        url:"data/text.json",
        async:true,
        success:function(res){
            console.log(res);
            $(".logo").attr("src",res.logo);
            let main0="";
            for(i=0;i<res.main0.main.length;i++){
                main0+="<div class='col-md-2 col-sm-4 col-xs-6'><img src='"+res.main0.main[i].img+"'><h5>"+res.main0.main[i].h5+"</h5><p>"+res.main0.main[i].p+"</p></div>";
            }
            $(".main0 h1").html(res.main0.h1);
            $(".main0 .row").html(main0);
            let main1="";
            for(i=0;i<res.main1.main.length;i++){
                main1+="<div class='col-md-2 col-sm-4 col-xs-6'><img src='"+res.main1.main[i].img+"'><h5>"+res.main1.main[i].h5+"</h5><p>"+res.main1.main[i].p+"</p></div>";
            }
            $(".main1 h1").html(res.main1.h1);
            $(".main1 .row").html(main1);
            let main2="";
            for(i=0;i<res.main2.main.length;i++){
                main2+="<div class='col-md-2 col-sm-4 col-xs-6'><img src='"+res.main2.main[i].img+"'><h5>"+res.main2.main[i].h5+"</h5><p>"+res.main2.main[i].p+"</p></div>";
            }
            $(".main2 h1").html(res.main2.h1);
            $(".main2 .row").html(main2);
            let main3="";
            for(i=0;i<res.main3.main.length;i++){
                main3+="<div class='col-md-2 col-sm-4 col-xs-6'><img src='"+res.main3.main[i].img+"'><h5>"+res.main3.main[i].h5+"</h5><p>"+res.main3.main[i].p+"</p></div>";
            }
            $(".main3 h1").html(res.main3.h1);
            $(".main3 .row").html(main3);
            let right="";
            for(i=0;i<res.right.main.length;i++){
                right+="<div class='col-md-3 col-sm-4 col-xs-6'><img src='"+res.right.main[i].img+"'><h5>"+res.right.main[i].h5+"</h5><p>"+res.right.main[i].p+"</p></div>";
            }
            $(".right").html(right);
            let right1="";
            for(i=0;i<res.right1.main.length;i++){
                right1+="<div class='col-md-3 col-sm-4 col-xs-6'><img src='"+res.right1.main[i].img+"'><h5>"+res.right1.main[i].h5+"</h5><p>"+res.right1.main[i].p+"</p></div>";
            }
            $(".right1").html(right1);
            let right2="";
            for(i=0;i<res.right2.main.length;i++){
                right2+="<div class='col-md-3 col-sm-4 col-xs-6'><img src='"+res.right2.main[i].img+"'><h5>"+res.right2.main[i].h5+"</h5><p>"+res.right2.main[i].p+"</p></div>";
            }
            $(".right2").html(right2);
            let main8="";
            for(i=0;i<res.main8.main.length;i++){
                main8+="<div class='col-md-2 col-sm-4 col-xs-6'><img src='"+res.main8.main[i].img+"'><h5>"+res.main8.main[i].h5+"</h5><p>"+res.main8.main[i].p+"</p></div>";
            }
            $(".main8 h1").html(res.main8.h1);
            $(".main8 .row").html(main8);
        }
    })
})