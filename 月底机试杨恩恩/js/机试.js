var args = {
    list: [
        {sName: "痴心绝对", sSinger: "李圣杰"},
        {sName: "南山南",  sSinger: "马頔"},
        {sName: "面朝大海",  sSinger: "马頔"},
        {sName: "怀念青春",  sSinger: "MC小洲"},
        {sName: "万佛朝中",  sSinger: "MC小洲"},
        {sName: "你说别再笑了",  sSinger: "MC小洲"},
        {sName: "怀念青春",  sSinger: "MC小洲"},
        {sName: "怀念青春",  sSinger: "MC耀阳"},
        {sName: "怀念青春",  sSinger: "王彦斌"},
        {sName: "那些年",  sSinger: "王彦斌"},
        {sName: "青春似火",  sSinger: "李伟洲"}
    ],
    id: "c"
};
function  Song(ele,data,btn0,btn1,gq,gs,tj){
    this.box=document.getElementById(ele);
    this.btn0=document.getElementById(btn0);
    this.btn1=document.getElementById(btn1);
    this.gq=document.getElementById(gq);
    this.gs=document.getElementById(gs);
    this.tj=document.getElementById(tj);
    this.DOM(data);
    this.data=data;
    this.liON();
}
Song.prototype={
    DOM:function(data){
        for(i=0;i<data.list.length;i++){
            this.li=document.createElement("li");
            this.li.className=data.id;
            this.span=document.createElement("span");
            this.i=document.createElement("i");
            this.button=document.createElement("button");
            this.box.appendChild(this.li);
            this.li.appendChild(this.span);
            this.span.innerHTML=data.list[i].sName;
            this.li.appendChild(this.i);
            this.i.innerHTML=data.list[i].sSinger;
            this.li.appendChild(this.button);
            this.button.innerHTML="删除";
            this.ON();
            this.btn0ON();
            this.btn1ON();
            this.tjON(data);
        }
    },
    ON:function(){
        this.button.onclick=function(){
            this.parentNode.parentNode.removeChild(this.parentNode);
        }
    },
    btn0ON:function(){
        var that=this;
        this.btn0.onclick=function(){
            var li=document.getElementsByClassName("c");
            for(i=0;i<li.length;i++){
                li[i].style.display="none";
                if(that.gq.value===li[i].children[0].innerHTML){
                    li[i].style.display="block";
                }
            }
        }            
    },
    liON:function(data){
        var that=this;
        var li=document.getElementsByClassName("c");
        for(i=0;i<li.length;i++){
            li[i].onclick=function(){
                for(j=0;j<li.length;j++){
                    if(this==li[j]){
                        this.style.background="rgb(206, 206, 206)";
                    }else{
                        li[j].style.background="white";
                    } 
                }
            }
        }          
    },
    btn1ON:function(){
        var that=this;
        this.btn1.onclick=function(){
            var li=document.getElementsByClassName("c");
            for(i=0;i<li.length;i++){
                li[i].style.display="none";
                if(that.gs.value===li[i].children[1].innerHTML){
                    li[i].style.display="block";
                }
            }
        }            
    },
    tjON:function(){
        var that=this;
        this.tj.onclick=function(){
            that.li=document.createElement("li");
            that.li.className=that.data.id;
            that.span=document.createElement("span");
            that.i=document.createElement("i");
            that.button=document.createElement("button");
            that.box.appendChild(that.li);
            that.li.appendChild(that.span);
            that.span.innerHTML=that.gq.value;
            that.li.appendChild(that.i);
            that.i.innerHTML=that.gs.value;
            that.li.appendChild(that.button);
            that.button.innerHTML="删除";
            that.ON(); 
            that.btn0ON();
            that.btn1ON();           
            that.liON();
        }            
    }
}
new Song("box",args,"btn0","btn1","gq","gs","tj");



























