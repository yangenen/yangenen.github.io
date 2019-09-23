//手风琴1
var at=document.getElementById('fdiv')
var qw=at.getElementsByTagName('img');
var bs=100;
var bwidth=qw[0].offsetWidth;

var rs=function(){
    for(var i=1;i<qw.length;i++){
        qw[i].style.left=855+(i-1)*bs+'px';
        at.style.width=1155+'px';
        at.style.overflow='hidden';
    }
}
rs()

for(var i=0;i<qw.length;i++){
    ~function(i){
        qw[i].onmouseover=function(ev){
            var ev=ev||window.event
            rs()		//重置图片
            for(var j=1;j<=i;j++){
                    qw[j].style.left=100*j+"px"
                    qw[j].style.transition='all 1s ease'
                }
            }
    }(i)
}
