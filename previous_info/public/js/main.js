$(()=>{
  $.ajax({
    url:"http://127.0.0.1:8080/user/main",
    type:"GET",
    dataType:"json",
    success:function(result){
      console.log(result)
      var html=""
      for(var i=0;i<result.length;i++){
        html+=`<img src="${result[i].pic}">`
      }
      $("#main").html(html) 
    }
  })
})