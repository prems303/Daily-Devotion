var hbs = require('express-handlebars')
var path = require('path')
var express = require('express')

var app = express()

app.use(express.static('public'))


app.engine('hbs', hbs())
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))


app.get("/", function (req, res) {
  var server = {

  }
  res.render('index', server)
})

var PORT = process.env.PORT || 3000
app.listen( PORT, function () {
  console.log('The server is running on port: ', PORT)
})
