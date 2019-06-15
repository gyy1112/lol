const express = require('express')
const bodyParser = require('body-parser')
const userRouter = require('./routes/router.js')
//创建web服务器
var server = express()
server.listen('8080',()=>console.log('服务器启动成功'))
//托管静态资源到public
server.use(express.static('../previous_info/public'))
server.use(bodyParser.urlencoded({
   extended:false
}))
server.use('/',userRouter)