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
					for(i=0;i<res.data.length;i++){
						if(res.data[i].video!=""){		
							// text+="<div><video controls='controls' autoplay='autoplay'><source src="+res.data[i].video+" poster="+res.data[i].MarketImage+" type='video/mp4'/></video><p>"+res.data[i].GoodsName+"</p></div>";
							text+="<div><img src="+res.data[i].ImgUrl+"><p>"+res.data[i].GoodsName+"</p></div>";
						}
					}
					$("section").html(text);
					aert(res);
					function aert(data){
						$("section div").on("touchstart",function(){
							console.log(data.data[$(this).index()].ImgUrl);
							console.log($(this).find("img"));
							// if(data.data[$(this).index()].video!=""){
								$("<div class='text'><button class='cuo'>X</button><div class='text-main'><video controls='controls' type='video/mp4' poster="+data.data[$(this).index()].ImgUrl+" src="+data.data[$(this).index()].video+"></video><h2>"+data.data[$(this).index()].GoodsName+"</h2><h4>"+data.data[$(this).index()].ShopName+"</h4><p>"+data.data[$(this).index()].TjRemark+"</p></div></div>").appendTo($("body"));
							// }
							$(".cuo").on("touchstart",function(){
								$(this).parent().css("display","none");
							})
						})
					}
					$(".main").children().on("touchstart",function(){
						$(this).attr("class","cur").siblings().removeClass();
						text="";
						// console.log($(this).index());
						if($(this).index()==0){
							for(i=0;i<res.data.length;i++){
								if(res.data[i].video!=""){		
									text+="<div><img src="+res.data[i].ImgUrl+"><p>"+res.data[i].GoodsName+"</p></div>";
								}
							}
							$("section").html(text);
						}else{
							for(j=0;j<res.data.length;j++){
								if($(this).html()==res.data[j].GoodsClass){
									if(res.data[j].video!=""){
										text+="<div><img src="+res.data[j].ImgUrl+"><p>"+res.data[j].GoodsName+"</p></div>";
									}
								}
							}
							$("section").html(text);
						}
						// console.log($("section div"));
					})
				}
			})
		},
	});
})