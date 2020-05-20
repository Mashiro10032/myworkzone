//曲线救国,判断当前浏览器是否支持ActiveX控件
//IE浏览器是不支持的,所以用来判断当前浏览器是否为IE
$(document).ready(function () {
    if (window.ActiveXObject || "ActiveXObject" in window) {
        alert("您当前使用的是IE浏览器,为了能得到更好的浏览体验,请使用Chrome/FireFox或Chrome内核的浏览器浏览")
    };
    $("#nav-open").click(function () {
        $("aside").css(
            "box-shadow", "5px 5px 10px 1px #000000"
        );

    });
    $("#nav-close").click(function () {
        $("aside").css(
            "box-shadow", "none"
        );
    });
})