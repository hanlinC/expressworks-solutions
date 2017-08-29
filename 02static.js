var path = require("path");
var express = require("express");
var http = require("http");

var app = express();

app.use(express.static(process.argv[3]||path.join(__dirname, "public")));

http.createServer(app).listen(process.argv[2]);
