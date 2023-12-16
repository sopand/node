"use strict";



class UserStorage{
        // # 을 변수에 붙히면 public 변수 => private 변수로 변경시켜준다 은닉화
   static  #users={  //해당 변수를 require한 상태로 바로 불러오기 위해서는 static을 선언하여 정적변수로 만들어 줘야 한다. 일반 변수는 바로사용 불가 x new 초기화해줘야 불러올 수 있음
        id:["pows1011","pows1021","pows1031"],
        psword:["1234","2345","3456"],
        name:["aaa","bbb","ccc"],
    };
                                // ...변수명으로 파라미터를 받아오면 해당 파라미터에 갯수 제한을 두는게아닌 배열로 받아와 여러 파라미터를 받을 수 있음
    static getUsers(...fields){   // 자바의 Getter원리인듯 함 바로 가져오는게 아닌 Getter를 거쳐서 데이터를 가져오는 것
        const users = this.#users;
        const newUsers = fields.reduce((newUsers,field)=>{
        if(users.hasOwnProperty(field)){
            newUsers[field]=users[field];
        }
        return newUsers;
        },{});
 
        return newUsers;
    }

    
}

module.exports = UserStorage;