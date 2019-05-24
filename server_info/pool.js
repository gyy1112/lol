const mysql = require('mysql')
var pool = mysql.createPool({
  host:'127.0.0.1',
  port:'3306',
  uname:'root',
  upwd:'',
  database:'hero',
  connectionLimit:20
})
module.exports = pool