"use strict";

const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    confirmPsword = document.querySelector("#confirm-psword"),
    psword = document.querySelector("#psword"),
    registerBtn = document.querySelector("#button");


    registerBtn.addEventListener("click",register);
    function register(){
        const req= {
            id: id.value,
            name : name.value,
            psword : psword.value,
            confirmPsword :confirmPsword.value,
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
                alert(res.msg);
            }
        })
        .catch((err)=>{
            console.error(new Error("회원가입 중 에러 발생"));
        })
    }

    