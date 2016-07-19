var express = require('express')
var path = require('path')
var compression = require('compression')
//
// import React from 'react'
// import {renderToString} from 'react-dom/server'
// import {match, RouterContext} from 'react-router'
// import routes from './modules/routes'

var app = express()

app.use(compression())
app.use(express.static(path.join(__dirname, 'public')))

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

var PORT = process.env.PORT || 8080
app.listen(PORT, function() {
  console.log('Production Express server running at lochost:' + PORT);
})
