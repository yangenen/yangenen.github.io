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

















