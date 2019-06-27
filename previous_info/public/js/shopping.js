$(()=>{
  $.ajax({
    url:"http://127.0.0.1:8080/user/shopping",
    type:"GET",
    dataType:"json",
    success:function(result){
      console.log(result)
      var html=""
      for(var i=0;i<result.length;i++){
        html+=`<li>
        <i></i>
        <a href="shoppingdetail.html?lid=4">
          <img src="${result[i].new}" alt="" class="newpic">
          <img src="${result[i].pic1}" alt="" class="pic-1">
          <img src="${result[i].pic2}" alt="" class="pic-2">
        </a>
        <p class="pd-name">${result[i].details}</p>
        <p class="pd-price">¥${result[i].price.toFixed(2)}</p>
      </li>`
      }
      $(".list-shop-right .shop-product").html(html)
    }
  })
})