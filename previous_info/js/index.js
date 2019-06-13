(()=>{
  var timer;
  var index=0
  var width=$(".carousel ul li").eq(0).width()
  var lis=document.querySelectorAll(".carousel>ul>li")
  $("#carousel-lists span").mouseover(function(e){
    $(this).addClass("selected").siblings(".selected").removeClass("selected");
    var index=$(this).index()
    $(".carousel ul li").eq(index).stop().fadeIn(500).siblings().stop().fadeOut(500);
  }) 
  timer=setInterval(function(){
    index++;
    if(index==5){
      index=0
    }
    $("#carousel-lists span").eq(index).addClass("selected").siblings().removeClass("selected");
    $(".carousel ul li").eq(index).stop().fadeIn().siblings().stop().fadeOut();
  },3000);

  function tablist(selectors){
    $(selectors).mouseover(function(e){
      $(this).addClass("selected").siblings(".selected").removeClass("selected")
    })
  } 
  tablist(".tab-top ul li")   
  tablist(".m-act-title ul li")   
  tablist(".m-video-title ul li")   
})()