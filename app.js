const express = require('express')
var cors = require('cors')
var request = require('request');
var http = require("http");
const app = express();

app.use(cors())

var port = process.env.PORT || 8080;

app.get('/', function (req, res) {
  request('https://api.instagram.com/v1/users/self/media/recent/?access_token=6070044666.2f82be4.75275ed21029461788d485f5516ebf3f&count=8', function (error, response, body) {
    res.send(body);
  });
})

app.listen(port, function() {
  console.log('Our app is running on http://localhost:' + port);
});