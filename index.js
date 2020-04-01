"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.get('/', function (_req, res) {
    res.send('Hello Human Talks!');
});
app.listen(3000, function () {
    console.log('Server is up!');
});
