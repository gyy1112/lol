(()=>{ 
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
  })
  var $sy = $(".sy input")
  var $dg = $(".dg input")
  var flag;
  $sy.click(function(){
    if(this.checked==true){
      $dg.prop("checked",true)
      $sy.prop("checked",true)
    }
    if(this.checked==false){
      $dg.prop("checked",false)
      $sy.prop("checked",false)
    }
  })
  $dg.click(function(){
    var checked = $(".dg input:checked").length
    if($dg.length==checked){
      $sy.prop("checked",true)
    }else{
      $sy.prop("checked",false)
    }
  })
  var total =num= 0;
  $dg.each(function(){
    if($(this).checked){
      var sum =Number($(this).find("this li:eq(5)").text())
      total+=sum
    }
    $("#total i").text(total)
    var nums = Number($(this).find("this li:eq(4) input").val())
    num += nums
    $(".buyjs .count").text(num)
  })
  $('.delete').click(function () {
    if(window.confirm(`您确定要删除所选商品吗?`)){
        $(this).parent().parent().remove();
    }
  })
  $(".qk a").click(function(){
    if(window.confirm(`您确定要清空购物车吗?`)){
      $('.buynews').remove()
    }
  })

})()  