const express = require('express')
const pool = require('../pool.js')
const router = express.Router()

router.get("/check",(req,res)=>{
  var u_name=req.query.uname;
  console.log(u_name)
  var sql = 'select * from hero_user where uname=?'
  pool.query(sql,[u_name],(err,result)=>{
    console.log(result)
    if(err) throw(err);
    if(result.length>0){
      res.send("1")
    }else{
      res.send("0")
    }
  })
})

router.post('/reg',(req,res)=>{
  var u_name = req.body.uname
  var u_pwd = req.body.upwd
  var u_email = req.body.email
  var u_phone = req.body.phone
  var sql = 'insert into hero_user set uname=?,upwd=?,email=?,phone=?'
  pool.query(sql,[u_name,u_pwd,u_email,u_phone],(err,result)=>{
    if (err) throw err
    if(result.affectedRows>0){
      res.send("1")
    }else
      res.send("0")
  })
})

router.post('/login',(req,res)=>{
  var u_name = req.body.uname
  var u_pwd = req.body.upwd
  var sql = 'select * from hero_user where uname=? and upwd=?'
  pool.query(sql,[u_name,u_pwd],(err,result)=>{
    if(err) throw err;
    if(result.length>0){
      res.send("1")
    }else{
      res.send("0")
    }
  })
})
module.exports = router