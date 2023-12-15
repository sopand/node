"use strict";
// const http =require("http");
// const app = http.createServer((req,res)=>{

//     res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
//     switch(req.url){
//         case "/" :  res.end("루트임"); break;
//         case "/login" : res.end("로그인임"); break;
//         default : break;
//     }
//  });
// app.listen(3001,()=>{
//     console.log("http 서버 express없이가동");
// });



//모듈
const express = require('express');
const app = express();
// CORS설정 모두 허용
const cors = require('cors');
app.use(cors())
// 앱 세팅
app.set("views","./views");
app.set("view engine","ejs");

// 라우팅
const home=require("./routes/home");
app.use("/",home); // use ->미들 웨어를 등록해주는 메서드



module.exports=app;


// app.post("/user/:id",(req,res)=>{
//     const data=req.params;
//     console.log(data);
//     const body=req.body;
//     console.log(body);
// })
// app.get('/user/:id', (req, res) => {
//     // const data=req.params;
//     // console.log(data);
//     const data=req.query;
//     console.log(data);
//     res.json({'userid':data.id});
// })

// app.get('/sound/:name', (req, res) => {
//     const { name  }=req.params;
//     switch(name){
//         case "dog" :  res.json({'sound':'멍멍'}); break;
//         case "cat" :   res.json({'sound':'야옹'}); break;
//         default : break;
//     }
// })
// app.get('/dog', (req, res) => {
//     res.json({'sound':'멍멍'});
// })
// app.get('/cat', (req, res) => {
//     res.json({'sound':'야옹'});
// })

