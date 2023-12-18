"use strict";

const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    confirmPsword = document.querySelector("#confirm-psword"),
    psword = document.querySelector("#psword"),
    registerBtn = document.querySelector("#button");


    registerBtn.addEventListener("click",register);
    function register(){
        if(!id.value) return alert("아이디를 입력해주세요");
        if(psword.value !== confirmPsword.value) return alert("패스워드가 일치하지 않습니다");
        const req= {
            id: id.value,
            name : name.value,
            psword : psword.value,
        };
        fetch("/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(req),
        }).then((res)=>res.json())
        // .then((res)=>console.log(res)); 2개가 같은 뜻임
        // .then(console.log);
        .then((res)=>{
            if(res.success){
                location.href="/login";
            }else{
                if(res.err)return alert(res.err);
                alert(res.msg);
            }
        })
        .catch((err)=>{
            console.error(new Error("회원가입 중 에러 발생"));
        })
    }

    