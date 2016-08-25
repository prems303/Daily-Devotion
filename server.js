var hbs = require('express-handlebars')
var path = require('path')
var express = require('express')
var request = require('superagent')

var app = express()

app.use(express.static('public'))


app.engine('hbs', hbs())
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))


app.get("/", function (req, res) {
  var url = 'http://labs.bible.org/api/?passage=random'
  request.get(url, function(err, response){
    //console.log (response.text)
    if (err) throw err
      res.render('index', {devotion: response.text})
  })

})

var PORT = process.env.PORT || 3000
app.listen( PORT, function () {
  console.log('The server is running on port: ', PORT)
})
