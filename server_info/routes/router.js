const express = require('express')
const pool = require('../pool.js')
var router = express.Router()

router.get("check",(req,res)=>{
  var $uname=req.query.uname;
  var sql = `select * from hero_user where uname=?`
  pool.query(sql,[$uname],(err,result)=>{
    if(err)throw err;
    if(result.length>0){
      console.log(result)
      res.send("1")
    }else{
      res.send("0")
    }
  })
})



module.exports = router