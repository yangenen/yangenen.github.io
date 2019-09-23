//手风琴2
var zdiv=document.getElementById('ediv')
var zimg=zdiv.getElementsByTagName('img');
var as=100;
var zwidth=zimg[0].offsetWidth;

var rest=function(){
    for(var h=1;h<zimg.length;h++){
        zimg[h].style.left=855+(h-1)*as+'px';
        zdiv.style.width=1155+'px';
        zdiv.style.overflow='hidden';
    }
}
rest()

for(var i=0;i<zimg.length;i++){
    ~function(i){
        zimg[i].onmouseover=function(ev){
            var ev=ev||window.event
            rest()		//重置图片
            for(var v=1;v<=i;v++){
                    zimg[v].style.left=100*v+"px"
                    zimg[v].style.transition='all 1s ease'
                }
            }
    }(i)
}
