// ajax组件
// By 樊家威
function nanningJumper(){
    
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
function indexJumper(){
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
function aboutJumper(){
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
            var script = $(html).find("script");
            script.remove();
            $("section").empty();
            $("section").html(result);
        }
    })
};
function aprilJumper(){
    $.ajax({
        async:true,
        url:'src/html/april.html',
        type:'GET',
        dataType:'html',
        
        timeout:10000,
        error:function(){
            alert("页面同步失败,请检查网络");
        },
        success:function(html){
            var result = $(html).find(".content");
            var script = $(html).find("script");
            script.remove();
            $("section").empty();
            $("section").html(result);
        }
    })
};
function marchJumper(){
    $.ajax({
        async:true,
        url:'src/html/march.html',
        type:'GET',
        dataType:'html',
        
        timeout:10000,
        error:function(){
            alert("页面同步失败,请检查网络");
        },
        success:function(html){
            var result = $(html).find(".content");
            var script = $(html).find("script");
            script.remove();
            $("section").empty();
            $("section").html(result);
        }
    })
};