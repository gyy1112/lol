$(function(){
  $.ajax({
    url:"shopheader.html",
    type:"get",
    success:function(result){ 
      $(result).replaceAll("header"); 
      $(`<link rel="stylesheet" href="./css/shopheader.css">`).appendTo("head");
    }
  })
})