const express = require('express')
var cors = require('cors')
var request = require('request');
var http = require("http");
const app = express()

app.use(cors())



app.get('/', function (req, res) {
  request('https://api.instagram.com/v1/users/self/media/recent/?access_token=2461863410.05b0267.35ab4c7c1f234a6282d8fc1b96318d8b&count=12', function (error, response, body) {
    res.send(body);
  });
})

app.listen(8080, function () {
  console.log('Example app listening on port 4000!')
})