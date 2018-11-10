var express = require('express');
var path = require('path');
const app = express();
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 8000)
app.listen(3000);
app.use(express.json());

app.listen(app.get('port'), () => {
  console.log(`app is listening on ${app.get('port')}`)
})

app.get('/', function(req, res) {
  var results = getBooks()
  res.render('index')
})


app.get('*', function(req, res) {
  res.render('error');
});

module.exports = app;