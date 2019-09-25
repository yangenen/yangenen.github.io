$(document).on("ready",function(){
    //把案例、小圆点、图片都存入变量
	var leftBtn = $('#leftBtn');
	var rightBtn = $('#rightBtn');
	var liArr = $("#circles ol li");
	var img = $("#imagesList ul li");
	var box = $("#carousel");
	var btn = $(".btns");
	// 定时器
	var timer = setInterval(() => {
		zyb();
	}, 2000);
	box.mouseenter(function(){
		clearInterval(timer);
		btn.css("opacity",1);
	})
	box.mouseleave(function(){
		clearInterval(timer);
		btn.css("opacity",0);
		timer = setInterval(() => {
			zyb();
		}, 2000);
	})
	var idx = 0;
	leftBtn.click(function(){
		if(img.is(":animated")){
			return;
		}
		img.eq(idx).fadeOut(400);
		idx--;
		
		if(idx<0){
			idx=img.length-1;
		}
		img.eq(idx).fadeIn(400,function(){
			box.css("background-color",img.eq(idx).attr("data-yanse"));
		});
		liArr.eq(idx).addClass("cur").siblings().removeClass("cur");
	})
	rightBtn.click(zyb);
	function zyb(){
		if(img.is(":animated")){
			return;
		}
		img.eq(idx).fadeOut(400);
		idx++;
		if(idx>img.length-1){
			idx=0;
		}
		img.eq(idx).fadeIn(400);
		liArr.eq(idx).addClass("cur").siblings().removeClass("cur");
	}
	liArr.mouseover(function(){
		img.eq(idx).stop(true).fadeOut(400);
		idx = $(this).index();
		img.eq(idx).stop(true).fadeIn(400);
		$(this).addClass("cur").siblings().removeClass("cur");
	})
})