var express = require('express')
var app = express()

// Alias path
app.use('/ft', express.static('src/'))

//app.use('/sts/docs', express.static('dist/assets/'))

// Setting port to server
app.listen(3333)
