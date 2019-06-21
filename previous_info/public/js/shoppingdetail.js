$(()=>{ 
  var MWIDTH = 184
  var MHEIGHT = 176
  var MSWIDTH = 460 
  var MSHEIGHT = 440 
  $("#super-mask").hover(function(){
    $("#mask").toggleClass("d-none")
    $("#lgimg").toggleClass("d-none")
  }).mousemove(function (e) { 
    console.log(e.offsetX,e.offsetY)
    var top = e.offsetY-MHEIGHT/2
    var left = e.offsetX-MWIDTH/2
    if(top<0){
      top = 0;
    }else if(top>MSHEIGHT-MHEIGHT){
      top=MSHEIGHT-MHEIGHT
    }
    if(left<0){
      left = 0;
    }else if(left>MSWIDTH-MWIDTH){
      left=MSWIDTH-MWIDTH
    }
    $("#mask").css({top:top+"px",left:left+"px"})
    $("#lgimg").css("background-position",`${-left*2}px ${-top*2}px`)
  });
  $("#lgimg").css("background",`url("./image/shopping_image/index1.jpg") no-repeat`);
  $(".product-img ul li").click(function(){
    var $index = $(this).index()
    $(".product2").attr("src",`./image/shopping_image/index${$index+1}.jpg`)
    $("#lgimg").css("background",`url("./image/shopping_image/index${$index+1}.jpg") no-repeat`)
  })
  var n =parseInt($(".sl input").val())
  $(".a2 .lt").click(function(e){ 
    e.stopPropagation();
    e.preventDefault()
    if(n>1){n--;}
    $(".sl input").val(n)
  })
  $(".a2 .rt").click(function(){ 
    if(n<23){n++;}
    $(".sl input").val(n)
  })
  function tablist(selectors1,seletors2,seletors3){
    $(selectors1).mouseover(function(e){
      $(this).addClass("selected").siblings(".selected").removeClass("selected")
      var index=$(this).index()
    $(seletors2).eq(index).css("display","block").siblings().css("display","none")
    })
    $(seletors3).click(function(e){
      $(this).addClass("active").siblings(".active").removeClass("active")
    })
  } 
  tablist(".detail ul li",".imgs div")
  tablist("","",".ys a")
})