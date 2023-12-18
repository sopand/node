"use strict";

const fs = require("fs");

class UserStorage {
  // ...변수명으로 파라미터를 받아오면 해당 파라미터에 갯수 제한을 두는게아닌 배열로 받아와 여러 파라미터를 받을 수 있음
  static getUsers(...fields) {
    // 자바의 Getter원리인듯 함 바로 가져오는게 아닌 Getter를 거쳐서 데이터를 가져오는 것
    // const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});

    return newUsers;
  }

  static getUserInfo(id) {

    fs.readFile("./src/databases/users.json", (err, data) => {
      if (err) throw err;
      const users = JSON.parse(data);
      const idx = users.id.indexOf(id);
      const usersKeys = Object.keys(users);
      const userInfo = usersKeys.reduce((newUser, info) => {
        newUser[info] = users[info][idx];
        return newUser;
      }, {});
      return userInfo;
    });
  }

  static save(userInfo) {
    // const users = this.#users;
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.psword.push(userInfo.psword);
    return { success: true };
  }
}

module.exports = UserStorage;
