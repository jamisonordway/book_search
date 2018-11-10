// const http = require('http');
// const hostname = '127.0.0.1';
// const port = 3000;

const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.listen(3000);

// const server = http.createServer(function(req, res) {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Server Works/n');
// });

// server.listen(port, hostname, function() {
//   console.log('Server running at http://'+ hostname + ':' + port + '/');
// });

app.get('/search', function(req, res) {
  res.render('index.html')
})

app.get('*', function(req, res) {
  res.render('error');
});