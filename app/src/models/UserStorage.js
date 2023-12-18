"use strict";

const db = require("../config/db");
class UserStorage {

  // ...변수명으로 파라미터를 받아오면 해당 파라미터에 갯수 제한을 두는게아닌 배열로 받아와 여러 파라미터를 받을 수 있음
  static getUserInfo(id) {
   return new Promise((resolve,reject)=>{
    const query="SELECT * FROM users WHERE id= ?";
      db.query(query,[id],(err,data)=>{
        if(err) reject(`${err}`);
        resolve(data[0]);
      }); 
    })

  }

  static async save(userInfo) {
    return new Promise((resolve,reject)=>{
      const query="INSERT INTO usersdas (id,name,psword)VALUES(?,?,?)";
        db.query(query,
          [userInfo.id,userInfo.name,userInfo.psword],
          (err)=>{
          if(err) reject(`${err}`);
          resolve({success:true});
        }); 
      })


  }
}

module.exports = UserStorage;
