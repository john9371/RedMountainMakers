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

/****************
 * API ROUTING
****************/
    /************
     * CREATE
    ************/
    //Create User
    router.post("/users/:username", function (req, res) {
        con.query("INSERT INTO Users (username) VALUES (?)", [req.params.username], (err, rows, fields) => {
            if (err) {
                console.log(err);
            }
            else {
                res.send(rows);
            }
        });
    });
    //Create Chirp
    router.post("/chirps/:uid/:text", function (req, res) {
        con.query("INSERT INTO Chirps (userid, text) VALUES (?, ?)", [req.params.uid, req.params.text], (err, rows, fields) => {
            if (err) {
                console.log(err);
            }
            else {
                res.send(rows);
            }
        });
    });

    /************
     * READ
    ************/
    /************
     * USERS
    ************/
    //All users
    router.get('/users', function (req, res) {
        con.query('SELECT * FROM Users', (err, rows, fields) => {
            if (err) {
                console.log(err)
            }
            else {
                res.send(rows);
            }
        })
    });
    //Specific user
    router.get('/users/:id', function (req, res) {
        con.query('SELECT * FROM Users WHERE id = ?', [req.params.id], (err, rows, fields) => {
            if (err) {
                console.log(err)
            }
            else {
                res.send(rows);
            }
        })
    });
    /************
     * CHIRPS
    ************/
    //All chirps
    router.get('/chirps', function (req, res) {
        con.query('SELECT * FROM Chirps', (err, rows, fields) => {
            if (err) {
                console.log(err)
            }
            else {
                res.send(rows);
            }
        })
    });
    //All chirps of User
    router.get('/chirps/:uid', function (req, res) {
        con.query('SELECT * FROM Chirps WHERE UID = ?', [req.parans.uid], (err, rows, fields) => {
            if (err) {
                console.log(err)
            }
            else {
                res.send(rows);
            }
        })
    });

    /************
     * UPDATE
    ************/
    //Update User
    router.put('/users/:id/:name', function (req, res) {
        con.query('UPDATE Chirps SET username = ? WHERE id = ?', [req.params.name, req.params.id], (err, rows, fields) => {
            if (err) {
                console.log(err)
            }
            else {
                res.send(rows);
            }
        })
    });

    /************
     * DELETE
    ************/
    //Specific user
    router.delete('/users/:id', function (req, res) {
        con.query('DELETE FROM Users WHERE id = ?', [req.params.id], (err, rows, fields) => {
            if (err) {
                console.log(err)
            }
            else {
                res.send(rows);
            }
        })
    });
    //Specific Chirp
    router.delete('/chirps/:id', function (req, res) {
        con.query('DELETE FROM Chirps WHERE id = ?', [req.params.id], (err, rows, fields) => {
            if (err) {
                console.log(err)
            }
            else {
                res.send(rows);
            }
        })
    });
    //All Chirps of User
    router.delete('/chirps/:uid', function (req, res) {
        con.query('DELETE FROM Chirps WHERE userid = ?', [req.params.uid], (err, rows, fields) => {
            if (err) {
                console.log(err)
            }
            else {
                res.send(rows);
            }
        })
    });
module.exports = router;