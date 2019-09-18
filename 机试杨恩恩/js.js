var mm = document.getElementById("password");
var mspan = document.getElementById("mspan");
// 密码判断
mm.onblur=function(){
if(mm.value==""){
mspan.innerHTML="密码不能为空";
mspan.style.color="red";
}else{
mspan.innerHTML="√";
mspan.style.color="#e70edf";
}
}
//手机号
var tip0=document.getElementById("sjhspan");
var sjh=document.getElementById("sjh");
sjh.onblur=function(){
    if(sjh.value==""){
        tip0.innerHTML="请输入手机号";
        tip0.style.color="red";
    }else if(isNaN(sjh.value)){
        tip0.innerHTML="请输入正确的手机号";
        tip0.style.color="red";
    }else if(sjh.value.length==11){
        if(sjh.value[0]==1){
            tip0.innerHTML="手机号输入正确";
            tip0.style.color="red";
        }else{
            tip0.innerHTML="请输入1开头的手机号";
            tip0.style.color="red";
        }
    }else{
        tip0.innerHTML="请输入正确的手机号";
        tip0.style.color="red";
    }

}
var qie1 = document.getElementById("qy");
var qie2 = document.getElementById("yh");
qie1.onclick=function(){
    qie1.className="color0";
    qie2.className="";
    qie1.style.height="52px";
    qie1.style.marginTop="-2px";
}
qie2.onclick=function(){
    qie2.className="color0";
    qie1.className="";
    qie2.style.height="52px";
    qie2.style.marginTop="-2px";
}
