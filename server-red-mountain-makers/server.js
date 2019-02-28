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
//Create new class
router.post("/admin/class/:class_id/:name/:day/:time/:non_member_cost/:member_cost/:enrollment_capacity", function (req, res) {
    if (!req.params.class_id.includes(';') || !req.params.class_id.includes('"')) {
        con.query("INSERT INTO Classes (class_id, name, day, time, non_member_cost, member_cost, enrollment_capacity) VALUES (?)", [req.params.class_id, req.params.name, req.params.day, req.params.time, req.params.non_member_cost, req.params.member_cost, req.params.enrollment_capacity], (err, rows, fields) => {
            if (err) {
                console.log(err);
            }
            else {
                res.send(rows);
            }
        });
    }
});

/************
 * READ
************/
/************
 * USERS
************/
//All Classes
router.get('/classes', function (req, res) {
    request({
        uri: eventbrite.com/oauth/authorize
    }).pipe(res)
});

/************
 * DELETE
************/
/************
 * CREATE
************/
//Create new class
router.post("/admin/class/:class_id/:name/:day/:time/:non_member_cost/:member_cost/:enrollment_capacity", function (req, res) {
    if (!req.params.class_id.includes(';') || !req.params.class_id.includes('"')) {
        con.query("INSERT INTO Classes (class_id, name, day, time, non_member_cost, member_cost, enrollment_capacity) VALUES (?)", [req.params.class_id, req.params.name, req.params.day, req.params.time, req.params.non_member_cost, req.params.member_cost, req.params.enrollment_capacity], (err, rows, fields) => {
            if (err) {
                console.log(err);
            }
            else {
                res.send(rows);
            }
        });
    }
});

/************
 * READ
************/
/************
 * USERS
************/
//All Classes
router.get('/users', function (req, res) {
    con.query('SELECT * FROM Classes', (err, rows, fields) => {
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
