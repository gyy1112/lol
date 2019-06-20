$(function(){
  $.ajax({
    url:"shopfooter.html",
    type:"get",
    success:function(result){
      $(result).replaceAll("footer"); 
      $(`<link rel="stylesheet" href="./css/shopfooter.css">`).appendTo("head");
    }
  })
})