const express = require('express');
const app = express();
const apiRouter = require("./api");
//var cors = require ('cors');

//app.use(cors());
app.use('/', apiRouter)

app.get('/', function (req, res) {
  return res.send('hello')
});

app.listen(process.env.PORT || 5000, function () {
  console.log('Node app is running on port 5000');
});


10:06:48	CREATE TABLE Member (     member_id INT NOT NULL,     name varchar(50)  NOT NULL,     email varchar(50) not null,      password varchar(150) not null,     date_created datetime DEFAULT CURRENT_TIMESTAMP,     member_status int not null,     liability_waiver boolean not null,     last_payed date not null,     parent_id int,     PRIMARY KEY (id) )	Error Code: 1067. Invalid default value for 'date_created'	0.022 sec
