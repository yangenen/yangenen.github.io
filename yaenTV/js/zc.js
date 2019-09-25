// console.log($(".cont-nav"));
$(".cont-nav").on("click",function(){
    $(this).css("background","rgba(67, 214, 255, 0.9)").siblings().css("background","white");
    $(this).css("color","white").siblings().css("color","black");
    $(this).css("fontWeight","bold").siblings().css("fontWeight","normal");
    $(".kuan").eq($(this).index()).css("display","block").siblings().css("display","none");
})
$(".sj-dl-cuo").on("click",function(){
    $(".sj-dl").css("left","100%");    
})
$(".sj-zc-cuo").on("click",function(){
    $(".sj-zc").css("left","-100%");
})
// 验证码
var str1 = "0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
var arr=str1.split("");
var yzm=document.getElementById("yzm");
var yzm0=document.getElementById("yzm0");
var yzm1=document.getElementById("yzm1");
var yzm2=document.getElementById("yzm2");
var yzm3=document.getElementById("yzm3");
var yzm4=document.getElementById("yzm4");
function getCod(yzm){
    var str="";
    for(var i=0;i<4 ;i++){
        var n=Math.floor(Math.random()*arr.length);
        var r=Math.floor(Math.random()*256);
        var g=Math.floor(Math.random()*256);
        var b=Math.floor(Math.random()*256);
        yzm.style.background="rgb("+r+","+g+","+b+")";
        str+=arr[n];
    }
    yzm.innerHTML=str;
    yzm.style.textDecoration="line-through";
}
yzm0.onclick=function(){
    getCod(yzm0);
}
yzm.onblur=function(){
    if(yzm.value==""){
        yzm2.innerHTML="";
    }else if(yzm.value.toUpperCase()==yzm0.innerHTML.toUpperCase()){
        yzm2.innerHTML="";
    }else{
        yzm2.innerHTML="&nbsp;&nbsp;验证码输入有误";
        yzm2.style.color="red";
    }
}
yzm1.onclick=function(){
    getCod(yzm1);
}
yzm4.onblur=function(){
    if(yzm4.value==""){
        yzm3.innerHTML="";
    }else if(yzm4.value.toUpperCase()==yzm1.innerHTML.toUpperCase()){
        yzm3.innerHTML="";
    }else{
        yzm3.innerHTML="&nbsp;&nbsp;验证码输入有误";
        yzm3.style.color="red";
    }
}
// 密码
var mm=document.getElementById("mm");
var mm1=document.getElementById("mm1");
var pd=document.getElementById("pd");
var pd1=document.getElementById("pd1");
pwd(mm,mm1);
pwd(pd,pd1);
function pwd(mm,mm1){
    mm.onkeyup=function(){
        if(mm.value.length<6){
            mm1.innerHTML="密码长度必须大于6位";
            mm1.style.color="#666";
            mm1.style.fontSize="12px";
            mm1.className="";
        }else{
            var arr=["","密码等级【低】","密码等级【中】","密码等级【高】"];
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
            mm1.innerHTML="请输入密码";
        }
    }
    mm.onfocus=function(){
        if(mm.value==""){
            mm1.innerHTML="请输入密码";
            mm1.style.color="#666";
            mm1.style.fontSize="12px";
        }
    }
}
















