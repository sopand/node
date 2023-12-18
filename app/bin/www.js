"use strict";


const app = require("../app");
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`서버작동 포트번호: ${PORT}`)
})
