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
  //左右轮播
   var abigbox=document.getElementsByClassName("qbigbox")[0];
   var abox=document.getElementById("qbox");
   var aul=abox.children[0];
   var aulliArr=aul.children;
   var aleftbtn=abigbox.children[1].children[1];
   var arightbtn=abigbox.children[1].children[2];
   aul.appendChild(aulliArr[0].cloneNode(true));
   var ak=0;//控制图片
   var as=0;//控制小方块
   var atimer=null;
   function aautoplay(){
	   atimer=setInterval(function(){
		   movestep();
	   },2000)
   }
   aautoplay();
   function movestep(){
	   ak++;
	   as++;
	   if(ak>4){
		   ak=1;
		   aul.style.left="0px";
	   }
	   move(aul,-ak*350);
   }
   function movestop(){
	   ak--;
	   as--;
	   if(ak<0){
		   ak=3;
		   aul.style.left=-4*350+"px";;
	   }
	   move(aul,-ak*350);
   }
   abigbox.onmouseover=function(){
	   clearInterval(atimer);
   }
   abigbox.onmouseout=function(){
	   aautoplay();
   }
   arightbtn.onclick=function(){
	   movestep();
   }
   aleftbtn.onclick=function(){
	   movestop();
   }
   function move(ele,target){
	   if(ele.atimer){ 
		   clearInterval(ele.atimer);
	   }
	   var step=target>ele.offsetLeft?10:-10;
	   ele.atimer=setInterval(function(){
		   ele.style.left=ele.offsetLeft+step+"px";
		   var cha=target-ele.offsetLeft;
		   if(abs(cha)<=abs(step)){
			   clearInterval(ele.atimer);
			   ele.style.left=target+"px";
		   }
	   },20)
   }
   function abs(num){
	   if(num>0){
		   return num;
	   }else{
		   return -num;
	   }
   }

//透明度轮播
var ddd=document.getElementsByClassName("middle-lb");
var abc=document.getElementById("middle-inner");
var qw=abc.children[0];
var qwLiArr=qw.children;
var as=abc.children[1];
var asLiArr=as.children;
var leftn=document.getElementById("leftbtn00");
var rightn=document.getElementById("rightbtn00");
var m=0;
var time;
function gh(){
	time=setInterval(function(){
		zx0();
	},2000)
}
gh();
function zx0(){
	m++;
	if(m>3){
		m=0;
	}
	for(var x=0;x<qwLiArr.length;x++){
		qwLiArr[x].style.opacity=0;
		asLiArr[x].className="";
	}
	qwLiArr[m].style.opacity=1;
	asLiArr[m].className="on";
}
abc.onmouseover=function(){
	clearInterval(time);
}
abc.onmouseout=function(){
	gh();
}
rightn.onclick=function(){
	zx0();
}
leftn.onclick=function(){
	m--;
	if(m<0){
		m=3;
	}
	for(var x=0;x<qwLiArr.length;x++){
		qwLiArr[x].style.opacity=0;
		asLiArr[x].className="";
	}
	qwLiArr[m].style.opacity=1;
	asLiArr[m].className="on";
}
        // 鼠标经过小方块（tab切换）
   for(var x =0; x<asLiArr.length; x++){
       asLiArr[x].onmouseover = function () {
           // 排他思想，
           for(var b=0; b<asLiArr.length; b++){
               asLiArr[b].className = "";
               qwLiArr[b].style.opacity = 0;
               if(this==asLiArr[b]){
                   // 关联计数器
                   m=b;
                   // 显示对应的图片
                   qwLiArr[m].style.opacity = 1;
                   // 当前加on
                   this.className = "on";
               }
           }
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

//广告小球碰壁
    var box=document.getElementById("box0");
    var bigbox=document.getElementById("dadiv");
    var main=bigbox.clientWidth
    var max=main-box.offsetWidth;
    var main0=bigbox.clientHeight
    var max0=main0-box.offsetHeight;
    var lock=true;
    var locky=true;
    var timer0=null;
    setInterval(function(){
        if(lock){
            box.style.left=box.offsetLeft+5+"px";
            if(box.offsetLeft>=max){
                 lock=false;
             }
        }else{
            box.style.left=box.offsetLeft-5+"px";
             if(box.offsetLeft<=0){
                 lock=true;
             }
        }
        if(locky){
            box.style.top=box.offsetTop+5+"px";
            if(box.offsetTop>=max0){
                 locky=false;
             }
        }else{
            box.style.top=box.offsetTop-5+"px";
             if(box.offsetTop<=0){
                 locky=true;
             }
        }
    },40)
    var box1=document.getElementById("box1");
    var max1=main-box1.offsetWidth;
    var max0=main0-box1.offsetHeight;
    var lock1=true;
    var locky1=true;
    setInterval(function(){
        if(lock1){
            box1.style.left=box1.offsetLeft+5+"px";
            if(box1.offsetLeft>=max){
                 lock1=false;
             }
        }else{
            box1.style.left=box1.offsetLeft-5+"px";
             if(box1.offsetLeft<=0){
                 lock1=true;
             }
        }
        if(locky1){
            box1.style.top=box1.offsetTop+5+"px";
            if(box1.offsetTop>=max0){
                 locky1=false;
             }
        }else{
            box1.style.top=box1.offsetTop-5+"px";
             if(box1.offsetTop<=0){
                 locky1=true;
             }
        }
    },50)
    var box2=document.getElementById("box2");
    var max2=main-box2.offsetWidth;
    var max0=main0-box2.offsetHeight;
    var lock2=true;
    var locky2=true;
    setInterval(function(){
        if(lock2){
            box2.style.left=box2.offsetLeft+5+"px";
            if(box2.offsetLeft>=max){
                 lock2=false;
             }
        }else{
            box2.style.left=box2.offsetLeft-5+"px";
             if(box2.offsetLeft<=0){
                 lock2=true;
             }
        }
        if(locky2){
            box2.style.top=box2.offsetTop+5+"px";
            if(box2.offsetTop>=max0){
                 locky2=false;
             }
        }else{
            box2.style.top=box2.offsetTop-5+"px";
             if(box2.offsetTop<=0){
                 locky2=true;
             }
        }
    },30)

//广告弹出与隐藏
var zzz=setInterval(function(){
   ggao.style.zIndex=100;
   ggao.style.opacity=1;
},10000)
var ggao=document.getElementById("ggao");
var tuichu=document.getElementById("tui");
tuichu.onclick=function(){
    ggao.style.display="none";
    clearInterval(zzz);
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

















