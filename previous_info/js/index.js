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
    if(index==lis.length){
      index=0
    }
    $("#carousel-lists span").eq(index).addClass("selected").siblings().removeClass("selected");
    $(".carousel ul li").eq(index).stop().fadeIn().siblings().stop().fadeOut();
  },3000);

  function tablist(selectors1,seletors2){
    $(selectors1).mouseover(function(e){
      $(this).addClass("selected").siblings(".selected").removeClass("selected")
      var index=$(this).index()
    $(seletors2).eq(index).css("display","block").siblings().css("display","none")
    })
  } 
  tablist(".tab-top ul li",".tab-content ul")   
  tablist(".m-act-title ul li",".m-act-list ul")   
  tablist(".m-video-left .m-video-title ul li",".video-time")   
  tablist(".m-video-right .video-day li",".hotprogram-content ul")   
  tablist(".m-match .match-list li",null)   
  tablist(".match-power ul li",null)   
})();


(()=>{
  var timer;
  var index2=0
  var index1=0
  var width=$(".hotcontent ul li").eq(0).width()+15
  var width1=$(".gamelist ul li").eq(0).width()+16
  timer=setInterval(function(){
    index1++
    // console.log(index)
    if(index1==7){
      index1=0
    }
    $(".hotcontent ul.db").css({"transform":"translateX("+(-width)*index1+"px)"});
  },2000);

  timer1=setInterval(function(){
    index2++
    if(index2==10){
      index2=0
    }
    $(".gamelist ul").css({"transform":"translateX("+(-width1)*index2+"px)"});
  },2000);
  $(".hotprogram-left").click(function(){
     index=0
     index1--
     if(index1==-6){
       index1=0;
     }
     $(".hotcontent ul.db").css({"transform":"translateX("+(width)*index1+"px)"})
  })
  $(".hotprogram-right").click(function(){
     index1++
     if(index1==7){
       index1=0;
     }
     $(".hotcontent ul").css({"transform":"translateX("+(-width)*index1+"px)"});
  })
})();

(()=>{
  $(".championlist .m-video-title li").click(function(){
    $(this).addClass("active").siblings(".active").removeClass("active");
  })  
  $("#all").click(function(){
    var zs=$(".championname ul li.all")
    for(var item of zs){
      $(item).show
    }
  })
  $("#zs").click(function(){
    var zs=$(".championname ul li:not(.zs)")
    for(var item of zs){
      $(item).hide()
    }
  })
  $("#fs").click(function(){
    var zs=$(".championname ul li:not(.fs)")
    for(var item of zs){
      $(item).hide()
    }
  })
  $("#ck").click(function(){
    var zs=$(".championname ul li:not(.ck)")
    for(var item of zs){
      $(item).hide()
    }
  })
  $("#tk").click(function(){
    var zs=$(".championname ul li:not(.tk)")
    for(var item of zs){
      $(item).hide()
    }
  })
  $("#cs").click(function(){
    var zs=$(".championname ul li:not(.cs)")
    for(var item of zs){
      $(item).hide()
    }
  })
  $("#fz").click(function(){
    var zs=$(".championname ul li:not(.fz)")
    for(var item of zs){
      $(item).hide()
    }
  })
  
})()