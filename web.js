var express = require('express');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var fs = require('fs');
  buffer = fs.readFileSync('index.html','utf-8').toString();
  response.send(buffer);
});
var port = process.env.PORT || 8080;
app.listen(port, function() {
	console.log("Listening on " + port);
});

