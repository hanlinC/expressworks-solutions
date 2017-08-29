var express = require("express");
var http = require("http");

var app = express();

app.all("*", function(request, response, next) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  next();
});

app.get("/home", function(request, response) {
  response.end("Hello World!");
});

http.createServer(app).listen(process.argv[2]);
