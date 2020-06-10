// ajax组件
// By 樊家威
function nanningAjax(){
    
    $.ajax({
        async:true,
        url:'src/html/nanning.html',
        type:'GET',
        dataType:'html',
        
        timeout:10000,
        error:function(){
            alert("页面同步失败,请检查网络");
        },
        success:function(html){
            var result = $(html).find(".content");
            $("section").empty();
            $("section").html(result);   
        }
    });
};
function indexAjax(){
    $.ajax({
        async:true,
        url:'index.html',
        type:'GET',
        dataType:'html',
        
        timeout:10000,
        error:function(){
            alert("页面同步失败,请检查网络");
        },
        success:function(html){
            var result = $(html).find(".content");
            $("section").empty();
            $("section").html(result);
        }
    })
};
function aboutAjax(){
    $.ajax({
        async:true,
        url:'src/html/profile.html',
        type:'GET',
        dataType:'html',
        
        timeout:10000,
        error:function(){
            alert("页面同步失败,请检查网络");
        },
        success:function(html){
            var result = $(html).find(".content");
            $("section").empty();
            $("section").html(result);
        }
    })
};
