    // 轮播图组件
    // By 樊家威
    function imageScroll(imgScrollDiv,imgMaxNum){

    
        var i = 0;
        var timer;
        $(function(){
            $(imgScrollDiv).eq(0).show().siblings().hide();
            start();
            change();
        });
        function start(){
            timer = setInterval(function(){
                i++;
                if(i==imgMaxNum){
                    i=0;
                }
                change();
            },3000);
        }
        function change(){
            $(".scroll").eq(i).fadeIn(30).siblings().stop(true,true).fadeOut(30);
        }
    }