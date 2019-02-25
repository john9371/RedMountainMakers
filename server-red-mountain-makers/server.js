// this part installs the packages your going to use in the file.
//var jsonFile = require('jsonfile');
const express = require('express');
const path = require('path');
var bodyParser = require("body-parser");
var mysql = require('mysql')
var app = express();
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'BeGre@t2019',
    database: 'chirpr'
});
connection.connect()
app.get("/user/all", function (req, res) {
    var sql = "select * from user";
    connection.query(sql, function (err, rows, fields) {
            if (err) throw err
            res.send(rows);
        })
});
app.get("/user/id", function (req, res) {
    var sql = "select * from users where id like "+ req;
    connection.query(sql, function (err, rows, fields) {
            if (err) throw err
            res.send(rows);
        })
});
app.get("/chirps/all", function (req, res) {
    var sql = "select * from Chirps";
    connection.query(sql, function (err, rows, fields) {
            if (err) throw err
            res.send(rows);
        })
});
app.get("/chirps/userid", function (req, res) {
    var sql = "select * from chirps where userid like " + req;
    connection.query(sql, function (err, rows, fields) {
            if (err) throw err
            res.send(rows);
        })
});
app.delete("/deleteUser/id", function (req, res) {
    var sql = "delete from user where id like " + req;
    connection.query(sql, function (err, rows, fields) {
            if (err) throw err
        })
});
app.delete("/deleteChirp/id", function (req, res) {
    var sql = "delete from chirps where id like " + req;
    connection.query(sql, function (err, rows, fields) {
            if (err) throw err
        })
});
app.update("/user/update", function (req, res) {
    var sql = ""
    if(req.id != null){
    sql += "update user where id like " + req.id;
    }
    if(req.name != null){
    sql += "update user where name like '" + req.name +"';";
    }
    if(req.email != null){
    sql += "update user where email like '" + req.email+ "';";
    }
    if(req.password != null){
    sql += "update user where password like " + req.password+"';";
    }
    connection.query(sql, function (err, rows, fields) {
            if (err) throw err
        })
});
app.post("/user/create", function(req){
    var sql = "insert into user (name, email, password) variables ('" + req.name + "', '" + req.email + "', '" + req.password + "');"
    connection.query(sql, function (err, rows, fields) {
        if (err) throw err
    })
})
app.post("/chirp/create", function(req){
    var sql = "insert into chirps (userid, text, location) variables ('" + req.userid + "', '" + req.text + "', '" + req.location + "');"
    connection.query(sql, function (err, rows, fields) {
        if (err) throw err
    })
})
connection.end();
// this is express listening for activity on the port 3000. When it connects to this port,
// the function is called and it console.logs('Server listening on port 3000').
app.listen(8000);
console.log('Server listening on port 8000');