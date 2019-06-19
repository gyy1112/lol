$(()=>{
  $("#uname").focus()
  $("#uname").focus(()=>{
   $("#txtuname").text("用户名长度在6~9位之间")
   $("#txtuname").attr("class","info")
  })
  .blur(()=>{
   var val = $("#uname").val()
   console.log(val)
   if(/^\w{6,9}$/.test(val)){
       $.ajax({
       url:"http://127.0.0.1:8080/user/check",
       type:"GET",
       data: {uname:val},
       dataType:"json",
       success:function(result){
         console.log(result)
         if(result=="1"){
          $("#txtuname").text("用户名已经存在")
          $("#txtuname").attr("class","error")
         }else{
          $("#txtuname").text("用户名验证通过")
          $("#txtuname").attr("class","ok")
         } 
       }    
       }) 
   }else{
    $("#txtuname").text("用户名格式不正确")
    $("#txtuname").attr("class","error")
   }
  })   
  $("#upwd").focus(()=>{
   $("#txtupwd").text("密码长度在6~12位之间")
   $("#txtupwd").attr("class","info")
  })
  .blur(()=>{
   if(/^\d{6,12}$/.test($("#upwd").val())){
     $("#txtupwd").text("密码验证通过")
     $("#txtupwd").attr("class","ok")
   }else{
     $("#txtupwd").text("密码格式不正确")
     $("#txtupwd").attr("class","error")
   }
  }) 
  $("#cpwd").focus(()=>{
   $("#txtcpwd").text("密码长度在6~12位之间")
   $("#txttxtcpwduname").attr("class","info")
  })
  .blur(()=>{
   if(($("#upwd").val())==$("#cpwd").val()){
     $("#txtcpwd").text("两次密码输入一致")
     $("#txtcpwd").attr("class","ok")
   }else{
     $("#txtcpwd").text("请重新输入密码")
     $("#txtcpwd").attr("class","error")
   }
  }) 
  $("#email").focus(()=>{
   $("#txtemail").text("请输入合法的邮箱地址")
   $("#txtemail").attr("class","info")
  })
  .blur(()=>{
   if(/^[\w]+(\.[\w]+)*@[\w]+(\.[\w]+)+$/.test($("#email").val())){
     $("#txtemail").text("该邮箱可以使用")
     $("#txtemail").attr("class","ok")
   }else{
     $("#txtemail").text("邮箱格式不正确")
     $("#txtemail").attr("class","error")
   }
  }) 
  $("#phone").focus(()=>{
   $("#txtphone").text("请输入合法的手机号")
   $("#txtphone").attr("class","info")
  })
  .blur(()=>{
   if(/^[1]{1}[3,4,5,6,7,8]{1}\d{9}/.test($("#phone").val())){
     $("#txtphone").text("手机号验证通过")
     $("#txtphone").attr("class","ok")
   }else{
     $("#txtphone").text("手机号格式不正确")
     $("#txtphone").attr("class","error")
   }
  }) 

  $("#submitinfo").click(function(){
    var $uname = $("#uname").val()
    var $upwd = $("#upwd").val()
    var $email = $("#email").val()
    var $phone = $("#phone").val()
    if($("#txtuname").text()!="用户名验证通过"||$("#txtupwd").text()!="密码验证通过"||$("#txtcpwd").text()!="两次密码输入一致"||$("#txtemail").text()!="该邮箱可以使用"||$("#txtphone").text()!="手机号验证通过"){
      alert("信息输入不正确")
      return
    }
    $.ajax({
      url:"http://127.0.0.1:8080/user/reg",
      type:"POST",
      data: {uname:$uname,upwd:$upwd,email:$email,phone:$phone},
      dataType:"json",
      success:function(result){
        if(result=="1"){
        alert("注册成功")
        location.href="http://127.0.0.1:8080/login.html"
        }else
        alert("注册失败")
      }    
    }) 
  })   
})