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


// 라우팅
const dotenv = require("dotenv").config(); // 환경 변수 설정을 위한것
const home=require("./src/routes/home");
//모듈
const bodyParser=require("body-parser"); // req.body의 데이터를 parsing해주는 모듈
const express = require('express');
const app = express();
// CORS설정 모두 허용
const cors = require('cors');
app.use(cors())


//req.body 데이터를 json방식으로 받아옴
app.use(bodyParser.json());
// URL을 통해 전달되는 데이터에 한글,공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({extended:true})) 
// 앱 세팅
app.set("views","./src/views");
app.set("view engine","ejs");


app.use(express.static(`${__dirname}/src/public`));
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

