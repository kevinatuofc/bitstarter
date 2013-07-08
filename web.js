var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
var fs = require('fs');
 fs.readFile('/etc/passwd', function (err, data) {
  if (err) throw err;
  var buffer = new Buffer(36);
  buffer.write(data, "utf-8");
  response.send(buffer.toString("utf-8", 0, 33));
});
 
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});