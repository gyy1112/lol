$(()=>{ 
  if(location.search!==""){
    var lid = location.search.split("=")[1]
    $.ajax({
      url:"http://127.0.0.1:8080/user/shoppingdetail",
      type:"GET",
      data:{lid},
      dataType:"json",
      success:function(result){
        console.log(result)
        var html=""
        for(var i=0;i<result.length;i++){
          html+=`<div class="mainbar-xq-lt">
          <div class="product-img">
            <img src="${result[i].isnew}" alt="" class="product1">
            <img src="${result[i].pic1}" alt="" class="product2">
            <div id="lgimg" class="d-none"></div>
            <div id="mask" class="d-none"></div>
            <div id="super-mask"></div>
            <ul>
              <li>
                <a href="#">
                  <img src="${result[i].pic1}" alt="">
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="${result[i].pic2}" alt="">
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="${result[i].pic3}" alt="">
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="${result[i].pic4}" alt="">
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="${result[i].pic5}" alt="">
                </a>
              </li>
            </ul>
          </div>
          <a class="img-fd">点击放大</a>
        </div>
        <div class="mainbar-xq-rt">
          <div class="name">
            <h3>${result[i].info}</h3>
          </div>
          <div class="price">
            <span>现价：</span>
            <span>¥${result[i].price}</span>
          </div>
          <div class="xl">
            <div class="s1">最近销量 ${result[i].sale}</div>
            <div class="s2">累计评价 0</div>
            <div class="s3">累计收藏宝贝 1</div>
          </div>
          <div class="ys">
            <span>颜色：</span>
            <a href="#" class="selected active">${result[i].color}</a>
          </div>
          <div class="ys">
            <span>尺码：</span> 
            <a href="#" class="selected active">S</a>
            <a href="#" class="selected">M</a>
            <a href="#" class="selected">L</a>
            <a href="#" class="selected">XXL</a>
            <a href="#" class="selected">XL</a>
          </div>
          <div class="sl">
            <span class="a1">数量：</span>
            <span class="a2">
              <a class="lt">-</a>
            </span><input type="text" value="1"><span class="a2">
              <a class="rt">+</a>
            </span>
            <span class="a3">
              （还剩：<strong>${result[i].count}</strong>件）
            </span>
          </div>
          <div class="buy">
            <a href="javascript:;" class="buyshops">立即购买</a>
            <a href="javascript:;" class="buyshops">加入购物车</a>
            <a href="#">
              <i></i>
            </a>
            <a href="#">收藏宝贝</a>
          </div>
          <ul class="fuwu">
            <li>
              <span></span>
              <a href="#">7天无理由退换货</a>
            </li>
            <li>
              <span></span>
              <a href="#">100%官方正品</a>
            </li>
            <li>
              <span></span>
              <a href="#">全场每单满199元包邮</a>
            </li>
          </ul>
        </div>
          `
        }
        $('.mainbar-xq').html(html)
        var MWIDTH = 184
        var MHEIGHT = 176
        var MSWIDTH = 460 
        var MSHEIGHT = 440 
        $("#super-mask").hover(function(){
          $("#mask").toggleClass("d-none")
          $("#lgimg").toggleClass("d-none")
        }).mousemove(function (e) { 
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
        $('.buyshops').click(function(){
          console.log(localStorage.getItem("uname"))
          if(localStorage.getItem("uname")!=""&&localStorage.getItem("uname")!=null){
            location.href="http://127.0.0.1:8080/shoppingcart.html"
          }else{
            location.href="http://127.0.0.1:8080/login.html"
          }
        })
      }  
    })       
  }
})