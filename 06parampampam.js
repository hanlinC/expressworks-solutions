var express = require("express");
var http = require("http");

var app = express();

app.put("/message/:id", function(request,response) {
  // extract parameters
  var id = request.params.id;
  // response to PUT requests, return SHA1 hash of current date and sent id
  var str = require("crypto")
    .createHash("sha1")
    .update(new Date().toDateString() + id)
    .digest("hex");
  response.send(str);
});

http.createServer(app).listen(process.argv[2]);
