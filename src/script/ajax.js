
$("li a:eq(1)").click(function(){
    alert("1");
    $.ajax({
    async:true,
    url:'nanning.html',
    type:'GET',
    dataType:'html',
    
    timeout:10000,
    error:function(){

    },
    success:function(html){
        var result = $(html).find(".content");
        $("section").empty();
        $("section").html(result);
        console.log(result);
        
    }
})
});
$("li a:eq(0)").click(function(){
    alert("0");
    $.ajax({
    async:true,
    url:'index.html',
    type:'GET',
    dataType:'html',
    
    timeout:10000,
    error:function(){
        alert("error");
    },
    success:function(html){
        var result = $(html).find(".content");
        $("section").html(result);
        
    }
})
});