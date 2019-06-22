$(function(){
  var $floors = $(".floor")
	$(window).scroll(function(){
		var gunTop = $(window).scrollTop()
		if(gunTop>=400){
			$(".fixnav").show()
			$floors.each(function(i,f){
				var $f = $(f)
				var offsetTop = $f.offset().top
				if(gunTop+innerHeight/2>offsetTop){
					$(".fixnav").children(`li:eq(${i})`).addClass("change").siblings().removeClass("change")
				}
			})
		}else{
			$(".fixnav").hide()
		}
  })
	$(".fixnav").on("click","li",function(){
		var index = $(this).index()
		var top = $($floors[index]).offset().top-150
		$("html").stop(true).animate({
			scrollTop:top
		},500)
	})
  var timer;
  var index=0
  var width=$(".carousel ul li").eq(0).width()
  var lis=$(".carousel>ul>li")
  $("#carousel-lists span").mouseover(function(e){
    $(this).addClass("selected").siblings(".selected").removeClass("selected");
    var index=$(this).index()
    $(".carousel ul li").eq(index).stop(true).fadeIn(500).siblings().stop(true).fadeOut(500);
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
  tablist(".m-match .match-list li")   
  tablist(".match-power ul li")   
});


$(function(){
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
});

$(()=>{
  $(".championlist .m-video-title li").click(function(){
    $(this).addClass("active").siblings(".active").removeClass("active");
  })  
  $("#all").click(function(){
    $(".championname ul li").show();
    var zs=$(".championname ul li.all")
    for(var item of zs){
      $(item).show
    }
  })
  function clicks(sele1,sele2){
    $(sele1).click(function(){
      $(".championname ul li").show()
      var a = $(sele2)
      for(var item of a){
        $(item).hide()
      }
    })
  }
  clicks("#zs",".championname ul li:not(.zs)")
  clicks("#fs",".championname ul li:not(.fs)")
  clicks("#ck",".championname ul li:not(.ck)")
  clicks("#tk",".championname ul li:not(.tk)")
  clicks("#cs",".championname ul li:not(.cs)")
  clicks("#fz",".championname ul li:not(.fz)")
})
