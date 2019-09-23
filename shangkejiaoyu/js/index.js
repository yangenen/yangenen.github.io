$(document).on("ready",function(){
    // 导航栏滑动
    let index=0;
    $(".nav-bot").width($(".nav .m").width());
    $(".nav .m ol").width($(".nav .m").width());
    $(".nav .m").hover(function(){
        // let oftlt=$(this).width();
        // $(".nav-bot").css("left",oftlt*$(this).index()+"px");
        // console.log($(this).width());
        $(".nav-bot").css("left",$(this).width()*$(this).index()+"px");
        $(this).find("ol").css("opacity",1);
    },function(){
        $(".nav-bot").css("left","0px");
        $(this).find("ol").css("opacity",0);
    })
    // ajax数据引入
    $.ajax({
        type:"get",
        url:"./data/text.json",
        async:true,
        success:function(res){
            console.log(res);
            $(".gyskimg").attr("src",res.gysk.img);
            $(".gyskp").html(res.gysk.p);
            var html="";
            for(i=0;i<res.gysk.ul.length;i++){
                html+="<li>"+res.gysk.ul[i]+"</li>";
            }
            $(".gyskul").html(html);
            var html0="";
            for(i=0;i<res.footer.ul0.length;i++){
                html0+="<p>"+res.footer.ul0[i]+"</p>";
            }
            $(".endul0").html(html0);
            var html1="";
            for(i=0;i<res.footer.ul1.length;i++){
                html1+="<p>"+res.footer.ul1[i]+"</p>";
            }
            $(".endul1").html(html1);
            var html2="";
            for(i=0;i<res.footer.ul2.length;i++){
                html2+="<p>"+res.footer.ul2[i]+"</p>";
            }
            $(".endul2").html(html2);
            var html3="";
            for(i=0;i<res.footer.ul3.length;i++){
                html3+="<p>"+res.footer.ul3[i]+"</p>";
            }
            $(".endul3").html(html3);
            var text="";
            for(i=0;i<res.gysk.main.length;i++){
                text+="<div style='background:url("+res.gysk.main[i].url+") no-repeat'><h4>"+res.gysk.main[i].h4+"</h4><h6>"+res.gysk.main[i].h6+"</h6><p>"+res.gysk.main[i].p+"</p><h5><a>了解更多></a><a>资讯详情></a></h5></div>";
            }
            $(".top-main-body").html(text);
            var text0="";
            for(i=0;i<res.gysk.end.length;i++){
                text0+="<div style='background:url("+res.gysk.end[i].url+") no-repeat'><h6>"+res.gysk.end[i].h6+"<p>"+res.gysk.end[i].p+"</p><br><a>查看详情</a></h6></div>";
            }
            $(".main-endd").html(text0);
            var text1="";
            for(i=0;i<res.gysk.cont.length;i++){
                text1+="<div><h6><i></i>"+res.gysk.cont[i].h6+"</h6><p>"+res.gysk.cont[i].p+"</p></div>";
            }
            $(".cont-r-m").html(text1);
        }
    })
    let lock=true;
    $(".xlon").on("click",function(){
        if(lock==true){
            $(this).find("p").css("background","#999");
            $(".nav").css("display","block");
            lock=false;
        }else{
            $(this).find("p").css("background","white");
            $(".nav").css("display","none");
            lock=true;
        }
    })
})