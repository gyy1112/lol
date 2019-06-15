const express = require('express')
const pool = require('../pool.js')
var router = express.Router()

router.get("check",(req,res)=>{
  var $uname=req.query.uname;
  var sql = `select * from hero_user where uname=?`
  pool.query(sql,[$uname],(err,result)=>{
    if(err) console.log(err);
    console.log(result)
    if(result.length>0){
      res.send("1")
    }else{
      res.send("0")
    }
  })
})



module.exports = router