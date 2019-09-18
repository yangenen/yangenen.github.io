//错
function img(ele){
    var img=document.createElement("img");
    img.src="../images/err_small.png";
    ele.appendChild(img);
    img.style.display="block";
    img.style.float="left";
}
//对
function dui(ele){
    var img=document.createElement("img");
    img.src="../images/0.png";
    ele.appendChild(img);
    img.style.display="block";
    img.style.float="left";
}
//获取ID
function getId(ele){
    return document.getElementById(ele);
}
var yhm=getId("yhm");
var yhm1=getId("yhm1");
yhm.onfocus=function(){
    if(yhm.value==""){
        yhm1.innerHTML="设置后不可更改<br>中英文均可最长14个英文7个汉字";
        yhm1.style.color="#666";
    }
}
yhm.onblur=function(){
    var reg0=/^[a-zA-Z]\w{1,14}$|^[\u4e00-\u9fa5]{1,7}$/;
    if(yhm.value==""){
        yhm1.innerHTML="";
    }else if(reg0.test(yhm.value)){
        yhm1.innerHTML="";
        dui(yhm1);
    }else{
        yhm1.innerHTML="&nbsp;&nbsp;用户名仅支持中英文、数字和下划线,且不能为纯数字";
        yhm1.style.color="red";
        img(yhm1);
    }
}

var sjh=getId("sjh");
var sjh1=getId("sjh1");
sjh.onfocus=function(){
    if(sjh.value==""){
        sjh1.innerHTML="请输入中国大陆手机号，其他用户不可见";
        sjh1.style.color="#666";
    }
}
sjh.onblur=function(){
    var reg1=/^1[3-9]\d{9}$/;
    if(sjh.value==""){
        sjh1.innerHTML="";
    }else if(reg1.test(sjh.value)){
        sjh1.innerHTML="";
        dui(sjh1);
    }else{
        sjh1.innerHTML="&nbsp;&nbsp;手机号码格式不正确";
        sjh1.style.color="red";
        img(sjh1);
    }
}
var yzm1=getId("yzm1");
var yzm2=getId("yzm2");
var yzm=getId("yzm");
var str1 = "0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
var arr=str1.split("");
function getCod(){
        var str="";
        for(var i=0;i<4 ;i++){
            var n=Math.floor(Math.random()*arr.length);
            var r=Math.floor(Math.random()*256);
            var g=Math.floor(Math.random()*256);
            var b=Math.floor(Math.random()*256);
            yzm1.style.background="rgb("+r+","+g+","+b+")";
            yzm1.style.color="black";
            yzm1.style.textDecoration="line-through";
            yzm1.style.fontStyle="italic"; 
            str+=arr[n];
        }
        yzm1.innerHTML=str;
    }
yzm1.onclick=function(){
    getCod();
}
yzm.onblur=function(){
    if(yzm.value==""){
        yzm2.innerHTML="";
    }else if(yzm.value.toUpperCase()==yzm1.innerHTML.toUpperCase()){
        yzm2.innerHTML="";
        dui(yzm2);
    }else{
        yzm2.innerHTML="&nbsp;&nbsp;验证码输入有误";
        yzm2.style.color="red";
        img(yzm2);
    }
}

var mm=getId("mm");
var mm1=getId("mm1");
mm.onkeyup=function(){
    if(mm.value.length<6){
        mm1.innerHTML="密码长度必须大于6位";
        mm1.style.color="#666";
        mm1.style.fontSize="12px";
        mm1.className="";
    }else{
        var arr=["","低","中","高"];
        var reg2=/[A-Z]/;
        var reg3=/[a-z]/;
        var reg4=/\d/;
        var index=0;
        if(reg2.test(mm.value)){
            index++;
        }
        if(reg3.test(mm.value)){
            index++;
        }
        if(reg4.test(mm.value)){
            index++;
        }
        mm1.className="lv"+index;
        mm1.innerHTML=arr[index];
        mm1.style.color="black";
        mm1.style.textAlign="center";
    }
}

mm.onblur=function(){
    if(mm.value==""){
        mm1.innerHTML="";
    }
}
mm.onfocus=function(){
    if(mm.value==""){
        mm1.innerHTML="请输入密码";
        mm1.style.color="#666";
        mm1.style.fontSize="12px";
    }
}
var dl=getId("dl");
var dlk=getId("dlk");
var mb=getId("mb");
dl.onclick=function(){
    dlk.style.display="block";
    mb.style.display="block";
}
dlk.onclick=function(){
    dlk.style.display="none";
    mb.style.display="none";
}


var ck=getId("ck");
var ck1=getId("ck1");
zc.onclick=function(){
    if(ck.checked==true){
        ck1.innerHTML="";
    }else{
        ck1.innerHTML="&nbsp;&nbsp;请勾选“阅读并接受百度用户协议”";
        ck1.style.color="red";
        ck1.style.marginTop="15px";
        img(ck1);
    }
    if(yhm.value==""&&sjh.value==""&&mm.value==""&&yzm.value==""){
        yhm1.innerHTML="&nbsp;&nbsp;请输入用户名";
        yhm1.style.color="red";
        img(yhm1);
        yzm2.innerHTML="&nbsp;&nbsp;请输入验证码";
        yzm2.style.color="red";
        img(yzm2);
        mm1.innerHTML="&nbsp;&nbsp;请输入密码";
        mm1.style.color="red";
        mm1.style.fontSize="12px";
        img(mm1);
        sjh1.innerHTML="&nbsp;&nbsp;请输入手机号";
        sjh1.style.color="red";
        img(sjh1);
    }
}





