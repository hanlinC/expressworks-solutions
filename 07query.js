var express = require("express");
var http = require("http");

var app = express();

app.get("/search", function(request,response) {
  // extract query
  var query = request.query;
  // response to GET requests, return query string in JSON format
  response.send(query);
});

http.createServer(app).listen(process.argv[2]);
