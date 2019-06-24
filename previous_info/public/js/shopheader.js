$(function(){
  $.ajax({
    url:"shopheader.html",
    type:"get",
    success:function(result){ 
      $(result).replaceAll("header"); 
      $(`<link rel="stylesheet" href="./css/shopheader.css">`).appendTo("head");
      $("#out").click(function(){
        exitu()
      })
      load_data()
    }
  })
  function load_data(){
    var theme=localStorage.getItem("uname");
    if(theme==null||theme==""){
      $("#up").removeClass("d-none").next().addClass("d-none"); 
      $("#userId").html('');
    }else{
      $("#up").addClass("d-none").next().removeClass("d-none") 
      $("#userId").html(theme);
    }
  }
  function exitu(){
    localStorage.removeItem("uname");
    load_data();
  }
})