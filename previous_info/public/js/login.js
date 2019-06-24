$(()=>{
  $("#uname").focus()
  $("#loginbtn").click(function(){
    var $uname = $("#uname").val()
    var $upwd = $("#upwd").val()
    $.ajax({
      url:"http://127.0.0.1:8080/user/login",
      type:"POST",
      data:{uname:$uname,upwd:$upwd},
      dataType:"json",
      success:function(result){
        if(result=="1"){
          localStorage.setItem("uname",$uname);	
          alert("登录成功")
          location.href="http://127.0.0.1:8080/shopping.html"
        }else{
          alert("用户名或者密码错误")
          $("#upwd").val("")
        }
      }
    })
  })
})