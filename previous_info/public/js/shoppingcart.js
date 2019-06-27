$(()=>{ 
  var userId = localStorage.getItem("uname")
  console.log(userId)
  $.ajax({
    url:"http://127.0.0.1:8080/user/shoppingcart",
    type:"GET",
    data:{userId},
    dataType:"json",
    success:function(result){
      console.log(result)
      var html=""
      for(var i=0;i<result.length;i++){
        console.log(result[i].img)
        html+=`<ul class="buytop buynews">
        <li class="qx dg">
            <input type="checkbox" >
        </li>
        <li class="sp">
          <img src="${result[i].img}" alt="">
          <a href="#">${result[i].news}</a>
        </li>
        <li class="dj">${result[i].price}</li>
        <li class="sl">
          <img src="./image/shopping_image/buy_jian.jpg" alt="" class="lt">
          <input type="text" value="${result[i].count}" disabled>
          <img src="./image/shopping_image/buy_jia.jpg" alt="" class="rt">
        </li>
        <li class="xj">${result[i].price*(result[i].count)}</li>
        <li class="cz">
          <a href="#" class="delete">删除</a>
          <a href="#">收藏</a>
        </li>
      </ul>`
      }
      $(".lists").html(html)
      $('.sl img').click(function () {
        var count;
        if($(this).hasClass("rt")){
          count=Number($(this).prev().val());
          count += 1;
          $(this).prev().val(count);
        }else{
          count=Number($(this).next().val());
          if(count > 1) {
            count -= 1;
            $(this).next().val(count);
          }  
        }  
        var price=Number(count*$(this).parent().prev().text());
        $(this).parent().next().text(price);
        loadCart()
      })
      var $sy = $(".sy input")
      var $dg = $(".dg input")
      $sy.click(function(){
        if(this.checked==true){
          $dg.prop("checked",true)
          $sy.prop("checked",true)
        }
        if(this.checked==false){
          $dg.prop("checked",false)
          $sy.prop("checked",false)
        }
        loadCart()
      })
      $dg.click(function(){
        var checked = $(".dg input:checked").length
        if($dg.length==checked){
          $sy.prop("checked",true)
        }else{
          $sy.prop("checked",false)
        }
        loadCart()
      })
      $('.delete').click(function () {
        if(window.confirm(`您确定要删除所选商品吗?`)){
            $(this).parent().parent().remove();
            var num = $(this).index()+1
            console.log(num)
            $.ajax({
              url:"http://127.0.0.1:8080/user/shoppingcart",
              type:"GET",
              data:{num},
              dataType:"json"
            })
        }
        loadCart()
      })
      $(".qk a").click(function(){
        if(window.confirm(`您确定要清空购物车吗?`)){
          $('.buynews').remove()
          $('.sy input').prop("checked",false)
          $.ajax({
            url:"http://127.0.0.1:8080/user/shoppingcart",
              type:"GET",
              dataType:"json"
          })
        }
        loadCart()
      })
      function loadCart(){
        var $checked=$(".dg input:checked")
        var total=0,num=0;
        for(var i=0;i<$checked.length;i++){
          var a = parseInt($($checked[i]).parent().parent().find(".xj").text())
          var b = parseInt($($checked[i]).parent().parent().find(".sl input").val())
          total += a
          num += b
        }
        $("#total i").text(total.toFixed(2))
        $(".buyjs .count").text(num)
      }
      $(window).scroll(function(){
        var scrolled = $(window).scrollTop()
        console.log(scrolled)
        if(scrolled>20){
          $(".buyrt").addClass("fixed")
        }else{
          $(".buyrt").removeClass("fixed")
        }
      })
    } 
  })
}) 