var express = require('express');
var fs=require('fs');
var htmlfile="index.html";

var app = express.createServer(express.logger());

var html=fs.readFileSync(htmlfile).toString();

app.get('/', function(request, response) {
  response.send(html);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

