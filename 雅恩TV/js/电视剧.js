//搜索框的下拉菜单
var text=document.getElementById("sousuo");
var rmss=document.getElementById("rmss");
var qwsaa=document.getElementById("qwsaa");
var ss=document.querySelectorAll(".ss");
text.onfocus=function(){
    text.style.backgroundImage="url(../images/头部/8.jpg)";
    rmss.style.display="block";
};
qwsaa.onclick=function(){
    text.style.backgroundImage="";
    rmss.style.display="none";
};
for(i=0;i<ss.length;i++){
    ss[i].onclick=function(){
        text.value=this.innerHTML;
    }
}


//消息里的table切换
var tabContent=document.getElementById("tabContent");
var tabTile=document.getElementById("tabTile");
var liArr=tabTile.getElementsByTagName("li");
var divArr=tabContent.getElementsByTagName("div");
 for(i=0;i<liArr.length;i++){
        liArr[i].a=i;
    liArr[i].onmouseover=function(){
        for(j=0;j<liArr.length;j++){
            liArr[j].className="";
            divArr[j].style.display="none";
            }
            this.className="current";
            divArr[this.a].style.display="block";
        }
    }

//登录页面显示
var dl=document.getElementById("dl");
var dlk=document.getElementById("dlk");
var dlkt=document.getElementsByClassName("dlk")[0];
var cuo=document.getElementById("cuo");
dl.onclick=function(){
	dlk.style.display="block";
	dlkt.style.display="block";
}
cuo.onclick=function(){
	dlk.style.display="none";
	dlkt.style.display="none";
}
//中国大陆下拉菜单的出现与隐藏
var zgdl=document.getElementById("zgdl");
var dq=document.getElementById("dq");
var gai=zgdl.children[0];
zgdl.onmousemove=function(){
		dq.style.display="block";
}
zgdl.onmouseout=function(){
		dq.style.display="none";
}
//中国大陆点击切换赋值
var pArr=dq.children;
for(m=0;m<pArr.length;m++){
	pArr[m].onclick=function(){
		gai.innerHTML=this.innerHTML;
	}	
}
//登录页面手机号判断
var sjhm=document.getElementById("sjhm");
var psd=document.getElementById("psd");
var ale=document.getElementsByClassName("alert")[0];
var cu=document.getElementById("cu");
sjhm.onblur=function(){
	if(sjhm.value==""){
		sjhm.value="请输入手机号";
		sjhm.style.color="red";
	}else if(isNaN(sjhm.value)){
		sjhm.value="您的输入有误请重新输入";
		sjhm.style.color="red";
	}else if(sjhm.value.length==11){
		if(sjhm.value[0]==1){
			console.log("手机号"+sjhm.value);
		}else{
			sjhm.value="请输入1开头的手机号";
			sjhm.style.color="red";
		}
	}else{
		sjhm.value="请输入正确的手机号";
		sjhm.style.color="red";
	}
}
//密码框的判断
psd.onblur=function(){
	if(psd.value==""){
		ale.style.display="block";
	}else{
		console.log("密码是"+psd.value);
	}
}
cu.onclick=function(){
	ale.style.display="none";
}
//角标的显示隐藏
var fht=document.getElementsByClassName("fhtop")[0];
var fhtp=document.getElementsByClassName("fhtopmain")[0];
fht.onmouseover=function(){
    fhtp.style.display="block";
}
fht.onmouseout=function(){
    fhtp.style.display="none";
}
var fk=document.getElementsByClassName("fk")[0];
var fkm=document.getElementsByClassName("fkmain")[0];
fk.onmouseover=function(){
    fkm.style.display="block";
}
fk.onmouseout=function(){
    fkm.style.display="none";
}

//获取鼠标位置
function getPos(ele){
    var posleft=0;
    var postop=0;
    //如果ele有父级元素进入循环
    //每次循环ele升级，一直到body
    //body的offsetParent=null退出循环
    while(ele.offsetParent){
       posleft+=ele.offsetLeft;
       postop+=ele.offsetTop;
       //升级ele;
       ele=ele.offsetParent;
    }
    var obj={
        left:posleft,
        top:postop
    }
    return obj;
}

//放大镜0
function getId(id){
    return document.getElementById(id);
}
var left0=getId("left0");
var right0=getId("right0");
var big0=getId("big0");
var drag=getId("drag");
var left01=getId("left01");
var right01=getId("right01");
var big01=getId("big01");
var drag1=getId("drag1");
var left02=getId("left02");
var right02=getId("right02");
var big02=getId("big02");
var drag2=getId("drag2");
var left03=getId("left03");
var right03=getId("right03");
var big03=getId("big03");
var drag3=getId("drag3");
left0.onmousemove=function(e){
	drag.style.display="block";
	right0.style.display="block";
	var event=e||window.event;
	//获取浏览器下滚动高度
	var _scrollTop = document.documentElement.scrollTop ||document.body.scrollTop
	var maxWidth=left0.offsetWidth-drag.offsetWidth;
	var maxHeight=left0.offsetHeight-drag.offsetHeight;
	var maxWidth0=big0.offsetWidth-right0.offsetWidth;
	var maxHeight0=big0.offsetHeight-right0.offsetHeight;
	var x=event.clientX-getPos(left0).left-drag.offsetWidth/2;
	var y=event.clientY-getPos(left0).top-drag.offsetHeight/2 + _scrollTop;
	if(x<0){
		x=0;
	}else if(x>maxWidth){
		x=maxWidth;
	}
	if(y<0){
		y=0;
	}else if(y>maxHeight){
		y=maxHeight;
	}
	drag.style.left=x+"px";
	drag.style.top=y+"px";
	big0.style.left=-x/maxWidth*maxWidth0+"px";
	big0.style.top=-y/maxHeight*maxHeight0+"px";
}
left0.onmouseout=function(){
	drag.style.display="none";
	right0.style.display="none";	
}


//放大镜2
left01.onmousemove=function(e){
	drag1.style.display="block";
	right01.style.display="block";
	var event=e||window.event;
	//获取浏览器下滚动高度
	var _scrollTop = document.documentElement.scrollTop ||document.body.scrollTop
	var maxWidth=left01.offsetWidth-drag1.offsetWidth;
	var maxHeight=left01.offsetHeight-drag1.offsetHeight;
	var maxWidth0=big01.offsetWidth-right01.offsetWidth;
	var maxHeight0=big01.offsetHeight-right01.offsetHeight;
	var x=event.clientX-getPos(left01).left-drag1.offsetWidth/2;
	var y=event.clientY-getPos(left01).top-drag1.offsetHeight/2 + _scrollTop;
	if(x<0){
		x=0;
	}else if(x>maxWidth){
		x=maxWidth;
	}
	if(y<0){
		y=0;
	}else if(y>maxHeight){
		y=maxHeight;
	}
	drag1.style.left=x+"px";
	drag1.style.top=y+"px";
	big01.style.left=-x/maxWidth*maxWidth0+"px";
	big01.style.top=-y/maxHeight*maxHeight0+"px";
}
left01.onmouseout=function(){
	drag1.style.display="none";
	right01.style.display="none";	
}


//放大镜3
left02.onmousemove=function(e){
	drag2.style.display="block";
	right02.style.display="block";
	var event=e||window.event;
	//获取浏览器下滚动高度
	var _scrollTop = document.documentElement.scrollTop ||document.body.scrollTop
	var maxWidth=left02.offsetWidth-drag2.offsetWidth;
	var maxHeight=left02.offsetHeight-drag2.offsetHeight;
	var maxWidth0=big02.offsetWidth-right02.offsetWidth;
	var maxHeight0=big02.offsetHeight-right02.offsetHeight;
	var x=event.clientX-getPos(left02).left-drag2.offsetWidth/2;
	var y=event.clientY-getPos(left02).top-drag2.offsetHeight/2 + _scrollTop;
	if(x<0){
		x=0;
	}else if(x>maxWidth){
		x=maxWidth;
	}
	if(y<0){
		y=0;
	}else if(y>maxHeight){
		y=maxHeight;
	}
	drag2.style.left=x+"px";
	drag2.style.top=y+"px";
	big02.style.left=-x/maxWidth*maxWidth0+"px";
	big02.style.top=-y/maxHeight*maxHeight0+"px";
}
left02.onmouseout=function(){
	drag2.style.display="none";
	right02.style.display="none";	
}



//放大镜4
left03.onmousemove=function(e){
	drag3.style.display="block";
	right03.style.display="block";
	var event=e||window.event;
	//获取浏览器下滚动高度
	var _scrollTop = document.documentElement.scrollTop ||document.body.scrollTop
	var maxWidth=left03.offsetWidth-drag3.offsetWidth;
	var maxHeight=left03.offsetHeight-drag3.offsetHeight;
	var maxWidth0=big03.offsetWidth-right03.offsetWidth;
	var maxHeight0=big03.offsetHeight-right03.offsetHeight;
	var x=event.clientX-getPos(left03).left-drag3.offsetWidth/2;
	var y=event.clientY-getPos(left03).top-drag3.offsetHeight/2 + _scrollTop;
	if(x<0){
		x=0;
	}else if(x>maxWidth){
		x=maxWidth;
	}
	if(y<0){
		y=0;
	}else if(y>maxHeight){
		y=maxHeight;
	}
	drag3.style.left=x+"px";
	drag3.style.top=y+"px";
	big03.style.left=-x/maxWidth*maxWidth0+"px";
	big03.style.top=-y/maxHeight*maxHeight0+"px";
}
left03.onmouseout=function(){
	drag3.style.display="none";
	right03.style.display="none";	
}

//顶部轮播
var box=document.getElementById('ybox');
var ad=box.children[0];
var ul=box.getElementsByTagName('ul')[0];
var ulliArr=ul.children;
var ol=box.getElementsByTagName('ol')[0];
var olLiArr=ol.children;
var imgWidth=ad.offsetWidth;
var timer=null;
var timer1=null;
var k=0;
box.onmouseover=function(){
	clearInterval(timer1);
}
box.onmouseout=function(){
	timer1=setInterval(autoStep,2000);
}	
function autoStep(){
	k++;
	if(k>9){
		k=0;
	}
	if(k<0){
		k=9;
	}
	ulliArr[k].style.zIndex=1;
	autoOpa();
	for(var i=0; i<olLiArr.length; i++){
		olLiArr[i].className="";
	}
	olLiArr[k].className="current";
}
function autoPlay(){
clearInterval(timer1);
timer1=setInterval(autoStep,2000);
}
autoPlay();
for(var i=0; i<olLiArr.length;i++){
	olLiArr[i].onmouseover=function(){
		for (var j = 0; j < olLiArr.length; j++) {
			  olLiArr[j].className="";
			 if(this==olLiArr[j]){
			 	olLiArr[j].className="current";
			 	k=j;
			 	autoOpa();
			 }
		}
	}
}  
  function autoOpa(){
  	var opa=0;
  	clearInterval(timer);
  	timer=setInterval(function(){
  		opa+=0.05;
  		if(opa>1){
  			opa=1;
  			clearInterval(timer);
  			for(var i=0; i<ulliArr.length; i++){
  				ulliArr[i].style.opacity=0;
  				ulliArr[i].style.zIndex=0;
  			}
  		}
  		ulliArr[k].style.opacity=opa;
  	},30)
  }















