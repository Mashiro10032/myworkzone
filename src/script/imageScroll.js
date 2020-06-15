    // 简单的轮播图组件
    // By 樊家威


    // API
    // imgScrollClass  图片的类名
    // 有个小BUG,不能自定义轮播速度和图片数量,这就意味着全站的轮播图数量必须一致,
    // 我也懒得修了,本来就是一个简单的封装
    // fadeInSpeed fadeIn的速度(单位毫秒)
    // fadeOutSpeed fadeOut的速度(单位毫秒)
    function imageScroll(imgScrollClass) {

        var i = 0;
        var timer;
        $(function () {
            $(imgScrollClass).eq(0).show().siblings().hide();
            start();
            change();
        });

        function start() {
            timer = setInterval(function () {
                i++;
                if (i == 4) {
                    i = 0;
                }
                change();
            }, 3000);
        }

        function change() {
            $(".scroll").eq(i).fadeIn(3000).siblings().stop(true, true).fadeOut(3000);
        }
    }