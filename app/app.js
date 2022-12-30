
"use strict";

//모듈
const express = require('express');
const app = express();

//라우팅
const home = require("./src/routes/home");

//앱 셋팅
app.set("views", "./src/views");
app.set("view engine", "ejs");


app.use("/", home); //미들웨어 등록해주는 메서드

module.exports = app;