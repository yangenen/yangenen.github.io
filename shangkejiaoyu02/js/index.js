$(document).on("ready",function(){
    // 导航栏滑动
    $(".navli").on("click",function(){
        $(".navli").removeClass("navon");
        $(this).addClass("navon");
        $(this).css("background","none");
    })
    // // ajax数据引入
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
            var text="";
            for(i=0;i<res.gysk.main.length;i++){
                text+="<div style='background:url("+res.gysk.main[i].url+") no-repeat'><h4>"+res.gysk.main[i].h4+"</h4><h6>"+res.gysk.main[i].h6+"</h6><p>"+res.gysk.main[i].p+"</p><h5><a>了解更多></a><a>资讯详情></a></h5></div>";
            }
            $(".main-mid").html(text);
            var text1="";
            for(i=0;i<res.gysk.cont.length;i++){
                text1+="<div><h6><i></i>"+res.gysk.cont[i].h6+"</h6><p>"+res.gysk.cont[i].p+"</p></div>";
            }
            $(".main-top-right-ul").html(text1);
            var text0="";
            for(i=0;i<res.gysk.end.length;i++){
                text0+="<div class='mainendli col-md-4  col-sm-6'><img src="+res.gysk.end[i].url+"><div><h4>"+res.gysk.end[i].h6+"</h4><p>"+res.gysk.end[i].p+"</p><br><a>查看详情</a></div></div>";
            }
            $(".mainend").html(text0);
            var html0="";
            for(i=0;i<res.footer.end.length;i++){
                var hmtl1="";
                for(j=0;j<res.footer.end[i].length;j++){
                    hmtl1+="<p>"+res.footer.end[i][j]+"</p>";
                }
                html0+="<div class='col-md-2 col-sm-3 col-xs-3'>"+hmtl1+"</div>";
            }
            $(".end").html(html0);
        }
    })
})