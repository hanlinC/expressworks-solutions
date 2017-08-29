var express = require("express");
var http = require("http");
var bodyparser = require("body-parser");

var app = express();

app.use(bodyparser.urlencoded( {extended: false} ));

app.post("/form", function(request, response) {
  response.send(request.body.str.split("").reverse().join(""));
});

http.createServer(app).listen(process.argv[2]);
