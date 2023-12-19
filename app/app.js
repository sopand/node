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
const dotenv = require('dotenv').config(); // 환경 변수 설정을 위한것
const express = require('express');
const bodyParser=require('body-parser'); // req.body의 데이터를 parsing해주는 모듈
// const morgan = require("morgan");
// const logger= require("./src/config/logger");





const app = express();
// CORS설정 모두 허용
const cors = require('cors');
app.use(cors())

// 라우팅
const home=require("./src/routes/home");

// 앱 세팅
app.set("views","./src/views");
app.set("view engine","ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json()); //req.body 데이터를 json방식으로 받아옴
app.use(bodyParser.urlencoded({extended:true})); // URL을 통해 전달되는 데이터에 한글,공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
// app.use(morgan("tiny",{stream:logger.stream}));
app.use("/",home); // use ->미들 웨어를 등록해주는 메서드

module.exports=app;