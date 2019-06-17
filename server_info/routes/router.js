const express = require('express')
const pool = require('../pool.js')
const router = express.Router()

router.get("/check",(req,res)=>{
  var u_name=req.query.uname;
  console.log(u_name)
  var sql = `select * from hero_user where uname='dingding'`
  pool.query(sql,[u_name],(err,result)=>{

   // if(err) throw(err);
    console.log(123)
    console.log(result)
    if(result.length>0){
      res.send("1")
    }else{
      res.send("0")
    }
  })
})


module.exports = router