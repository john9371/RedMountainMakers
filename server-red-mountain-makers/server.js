const express = require('express');
const app = express();
const apiRouter = require("./api");
//var cors = require ('cors');

//app.use(cors());
app.use('/', apiRouter)

app.get('/', function (req, res) {
  return res.send('hello')
});

app.listen(5000, function () {
  console.log('Node app is running on port 3000');
});

