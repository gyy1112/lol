$(()=>{ 
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
    }
    loadCart()
  })
  $(".qk a").click(function(){
    if(window.confirm(`您确定要清空购物车吗?`)){
      $('.buynews').remove()
      $('.sy input').prop("checked",false)
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
}) 