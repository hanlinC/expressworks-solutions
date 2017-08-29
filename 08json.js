var express = require("express");
var http = require("http");
var fs = require("fs");

var app = express();

app.get("/books", function(request,response) {
  fs.readFile(process.argv[3], function(err, data) {
    
    if (err) { 
      return response.status(500);
    }
    
    try {
      books = JSON.parse(data);
    } catch (err) {
      return response.status(500);
    }
    
    response.json(books);
  });
});

http.createServer(app).listen(process.argv[2]);
