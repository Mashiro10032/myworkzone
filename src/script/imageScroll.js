    // 轮播图组件
    // By 樊家威


    // API
    // imgScrollClass  图片的类名
    // imgMaxNum  图片的数量
    // fadeInSpeed fadeIn的速度(单位毫秒)
    // fadeOutSpeed fadeOut的速度(单位毫秒)
    function imageScroll(imgScrollClass, imgMaxNum, fadeInSpeed, fadeOutSpeed) {


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
            $(".scroll").eq(i).fadeIn(fadeInSpeed).siblings().stop(true, true).fadeOut(fadeOutSpeed);
        }
    }