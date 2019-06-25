$(()=>{
  $.ajax({
    url:"http://127.0.0.1:8080/user/main",
    type:"GET",
    dataType:"json",
    success:function(result){
      var arr = result.json
      
    }
  })
})