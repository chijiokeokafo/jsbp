const express = require('express');
const serveStatic = require('serve-static');
var path = require('path');

const app = express();

app.use('/', serveStatic(path.join(__dirname, '/dist')))

const port = process.env.PORT || 8080

app.listen(port)

console.log("listening on port" + port)

// app = express();
// app.use(serveStatic(__dirname + "/dist"));
// var port = process.env.PORT || 5000;
// app.listen(port);
// console.log('server started '+ port);