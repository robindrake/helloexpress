"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
var port = 65000;
app.get("/", function (req, res) {
    res.send("Hello Typescript with Express!");
});
app.listen(port, function () {
    console.log("Example listening on port ".concat(port));
});
