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
				  load_data();
          alert("登录成功")
          location.href="http://127.0.0.1:8080/index.html"
        }else{
          alert("用户名或者密码错误")
          $("#upwd").val("")
        }
      }
    })
  })
  function load_data(){
    var theme=localStorage.getItem("uname");
    if(theme==null||theme==""){
      $("#up").show().next().addClass("d-none")
      $("#userId").html('');

    }else{
      $("#up").hide().next().removeClass("d-none") 
      $("#userId").html(theme);
    }
  }  
})