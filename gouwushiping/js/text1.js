$(document).on("ready",function(){
	$.ajax({
		type:'get',//HTTP请求类型
		url:"json/text1.json",//json文件位置
		success:function(data){
			console.log(data);//打印返回获取到的JSON数据
			let html="";
			let text="";
			for(i=0;i<data.title.length;i++){
				html+="<span>"+data.title[i]+"</span>";
			}
			$(".main").html(html);//nav导航内容
			$(".main").children().width(100/data.title.length+"%");//导航span宽度
			$(".main").children().first().attr("class","cur");//nav导航栏当前设置样式
			$.ajax({
				type:"get",
				url:"http://api.xuandan.com/DataApi/index?AppKey=gxm8qi8y8e&page=1&cid=0",
				success:function(res){
					console.log(res);
					$("<div class='text'></div>").appendTo($("body"));
					$(".text").css("display","none");
					var arr=[];
					for(i=0;i<res.data.length;i++){
						if(res.data[i].video!=""){		
							// text+="<div><video controls='controls' autoplay='autoplay'><source src="+res.data[i].video+" poster="+res.data[i].MarketImage+" type='video/mp4'/></video><p>"+res.data[i].GoodsName+"</p></div>";
							text+="<div><img src='0.gif' class='lazyImg' data-src="+res.data[i].ImgUrl+"><p>"+res.data[i].GoodsName+"</p></div>";
							arr.push(i);
						}
					}
					$("section").html(text);
					// console.log(arr);
					$("section div").on("click",function(){
						$(".text").css("display","block");
						$("<button class='cuo'>X</button><div class='text-main'><video controls='controls' type='video/mp4' poster="+res.data[arr[$(this).index()]].ImgUrl+" src="+res.data[arr[$(this).index()]].video+"></video><h2>"+res.data[arr[$(this).index()]].GoodsName+"</h2><a href="+res.data[arr[$(this).index()]].ActLink+">"+res.data[arr[$(this).index()]].ShopName+"【优惠劵】</a><p>"+res.data[arr[$(this).index()]].TjRemark+"</p></div>").appendTo($(".text"));
						$(".cuo").on("touchstart",function(){
							$(this).parent().html("");
							$(".text").css("display","none");
						})
					})
					$(".main").children().on("click",function(){
						$(this).attr("class","cur").siblings().removeClass();
						text="";
						// console.log($(this).index());
						var newarr=[];
						if($(this).index()==0){
							for(i=0;i<res.data.length;i++){
								if(res.data[i].video!=""){		
									text+="<div><img src='0.gif' class='lazyImg' data-src="+res.data[i].ImgUrl+"><p>"+res.data[i].GoodsName+"</p></div>";
									newarr.push(i);
								}
							}
							$("section").html(text);
						}else{
							for(j=0;j<res.data.length;j++){
								if($(this).html()==res.data[j].GoodsClass){
									if(res.data[j].video!=""){
										text+="<div><img src='0.gif' class='lazyImg' data-src="+res.data[j].ImgUrl+"><p>"+res.data[j].GoodsName+"</p></div>";
										newarr.push(j);
									}
								}
							}
							$("section").html(text);
						}
						// console.log($("section div"));
						// console.log(newarr);
						$("section div").on("click",function(){
							$(".text").css("display","block");
							$("<button class='cuo'>X</button><div class='text-main'><video controls='controls' type='video/mp4' poster="+res.data[newarr[$(this).index()]].ImgUrl+" src="+res.data[newarr[$(this).index()]].video+"></video><h2>"+res.data[newarr[$(this).index()]].GoodsName+"</h2><a href="+res.data[newarr[$(this).index()]].ActLink+">"+res.data[newarr[$(this).index()]].ShopName+"【优惠劵】</a><p>"+res.data[newarr[$(this).index()]].TjRemark+"</p></div>").appendTo($(".text"));
							$(".cuo").on("t",function(){
								$(this).parent().html("");
								$(".text").css("display","none");
							})
						})
					})
					// 懒加载
					lazy();
					function lazy(){
						// console.log($(".lazyImg"));
						var viewportSize = $(window).height();
						var lazyload = function(){
							var scrollTop = $(window).scrollTop();
							$(".lazyImg").each(function(){
								var _this = $(this);
								var x = viewportSize + scrollTop + _this.position().top;
								if(x>0){
									_this.attr("src",_this.attr("data-src"));
								}
							})
						}
						setInterval(lazyload,1000);
					}
				}
			})
		},
	});
})