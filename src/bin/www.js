"use strict";


const app = require("../app");
const port = 3000;

app.listen(port, () => {
    console.log(`서버작동 포트번호: ${port}`)
})
