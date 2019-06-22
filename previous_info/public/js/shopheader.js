$(function(){
  $.ajax({
    url:"shopheader.html",
    type:"get",
    success:function(result){ 
      $(result).replaceAll("header"); 
      $(`<link rel="stylesheet" href="./css/shopheader.css">`).appendTo("head");
    }
  })
  function load_data(){
    var theme=localStorage.getItem("username");
    if(theme==null||theme==""){
      $("#up").show(); 
      $("#userId").html('');
    }else{
      $("#up").hide().next().removeClass("d-none") 
      $("#userId").html(theme);
    }
 }
})