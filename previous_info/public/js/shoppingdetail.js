$(()=>{ 
  $(".product-img ul li").click(function(){
    var $index = $(this).index()
    $(".product2").attr("src",`./image/shopping_image/index${$index+1}.jpg`)
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