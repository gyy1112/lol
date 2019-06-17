(()=>{
  $("#uname").focus()
  $("#loginbtn").click(function(){
    var $uname = $("#uname").val()
    var $upwd = $("#upwd").val()
    console.log($uname,$upwd)
    $.ajax({
      url:"http://127.0.0.1:8080/user/login",
      type:"POST",
      data:{uname:$uname,upwd:$upwd},
      dataType:"json",
      success:function(result){
        if(result=="1"){
          alert("登录成功")
          location.href="http://127.0.0.1:8080/index.html"
        }else{
          alert("用户名或者密码错误")
        }
      }
    })
  })
})()