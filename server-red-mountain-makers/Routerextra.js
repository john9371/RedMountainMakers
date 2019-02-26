const express = require('express');
const path = require('path');
var mysql = require('mysql');
const router = express.Router();

/****************
 * MySQL CONNECT
****************/
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "InnovateBham2019",
    database: "InnovBhamDB"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});


    //Create User
    router.post("/users/:name:password:email:status:lastpaydate", function (req, res) {
        con.query("INSERT INTO Member (name) VALUES (?)", [req.params.name, req.params.password, req.params.email, req.params.status, false, req.params.lastpaydate], (err, rows, fields) => {
            if (err) {
                console.log(err);
            }
            else {
                res.send(rows);
            }
        });
    });