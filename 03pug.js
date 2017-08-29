var express = require("express");
var http = require("http");

var app = express();

app.set("views", __dirname + "/views");

app.set("view engine", "pug");

app.get("/home", function(request, response) {
  response.render("03pug", { date: new Date().toDateString() });
});

http.createServer(app).listen(process.argv[2]);
