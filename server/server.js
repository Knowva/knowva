var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

require('./config/middleware')(app, express);

app.listen(port);
console.log("Server listening on port", port);
