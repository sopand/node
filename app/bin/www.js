"use strict";
const app = require("../app");
const PORT = process.env.PORT || 3000;
const logger =require("../src/config/logger");
app.listen(PORT, () => {
    logger.info(`서버작동 포트번호: ${PORT}`);
})
