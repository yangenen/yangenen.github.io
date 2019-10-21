$("ready",function(){
    $(".jz").on("click",function(){
        getData();
    })
     function getData(){
        $.ajax({
            type:"get",
            url:"http://api.xuandan.com/DataApi/index?AppKey=xaqjve1q1l&page=1&cid=0",
            success:function(date){
                // console.log(date)
                var obj = {items:date};
               //拿到数据以后执行第三步  调用temlate函数
               var str = template('template',obj);
               $('.shop').append(str)
               // 所有的DOM也就是每一个li标签.item 上树以后
               // 实现每一项的定位（瀑布流）
               waterfall();
            }
        })
    }
     function waterfall(){
        // 循环遍历每一项 .item
        var $item = $('.item');
        var heightArr = [0,0,0,0];
        $item.each(function(){
            // 定义一个数组，来保存每一列的高度
            // 查找数组中的最小值
            var minValue = heightArr[0];
            // 查找最大值
            var maxValue = heightArr[0];
            for(var i=0; i<heightArr.length; i++){
                if(heightArr[i]<minValue){
                    minValue = heightArr[i];
                }
                if(maxValue<heightArr[i]){
                    maxValue = heightArr[i];
                }
            }
            // 根据minValue 得到index
           var minIndex = heightArr.indexOf(minValue);
    
            // 根据minValue 和minIndex去给$(this)进行赋值
            // console.log(minValue,minIndex)
            $(this).css({
                "top" : minValue,
                "left": minIndex*320
            })
            // 把当前这一项的outerHeight 与之前的heightArr[i]值的和存入数组
            heightArr[minIndex] += $(this).height()+20;
            // 给大盒子wrapper 设置高度为最大高
            $('.shop').height(maxValue)
        })
     lock = true;
     }
    // 当出现滚动条的时候，继续加载
    // 开闭原则
    var lock = true;
    //监听滚动
    $(window).scroll(function(){
        if(!lock) return;
        var rate = $(window).scrollTop() / ($(document).height() - $(window).height());
        // console.log($(document).height());//这个是页面的高度
        // console.log($(window).height());//这个是窗口的高度
        // console.log(rate);
        if(rate >= 0.7){
            // 比例大于0.7，加载下一页，然后立刻关锁
            // page ++;
            // getJSONandRender(page);
            getData()
            lock = false;
        }
    })
    //首先将#back-to-top隐藏
    //$("#back-to-top").addClass('hide');
    //当滚动条的位置处于距顶部1000像素以下时，跳转链接出现，否则消失
    $(function ()
        {
            $(window).scroll(function()
        {
            if ($(window).scrollTop()>550)
            {
                $('body').find(".back-to-top").removeClass('hide');
            }
            else
            {
                $('body').find(".back-to-top").addClass('hide');
            }
        });
        //当点击跳转链接后，回到页面顶部位置
        $(".back-to-top").click(function()
        {
            $('body,html').animate({scrollTop:0},600);
            return false;
            });
        });
})