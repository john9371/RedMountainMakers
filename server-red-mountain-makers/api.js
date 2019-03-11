const express = require('express');
var mysql = require('mysql');
const router = express.Router();
var cors = require('cors');
express().use("*",cors());

/****************
 * MySQL CONNECT
****************/
//var eventKey = FHLUZYFIPS7BLMZVXO
var con = mysql.createConnection({
    host: "us-cdbr-iron-east-03.cleardb.net",
    user: "bfadb246e846ce",
    password: "95d7ac91",
    database: "heroku_c27a2caa62cf028"
});

con.connect(function (err) {
    if (err) {console.log(err)}
    console.log("Connected!");
});

/****************
 * API ROUTING
****************/
/************
 * CREATE
************/
//Create new payment
router.post("/paymentHistory/:payment_id/:member_id/:paymentDate", cors(), function (req, res) {
    if (!req.params.class_id.includes(';') || !req.params.class_id.includes('"')) {
        con.query("INSERT INTO Payment_History (payment_id, member_id, payment_date) VALUES (?)", [req.params.payment_id, req.params.member_id, req.params.payment_date], (err, rows, fields) => {
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
 * payment history
************/

router.get("/users", cors(), function (req, res) {
    con.query("SELECT * FROM Member", (err, rows, fields) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(rows);
            //x.push(rows);
            //res.send(x)
        }
    })

    
});


//Specific member history
router.get("/paymentHistory/:member_id", cors(), function (req, res) {
    if (!req.params.member_id.includes(';') || !req.params.member_id.includes('"')) {
        con.query('SELECT * FROM Classes WHERE member_id = ?', [req.params.member_id], (err, rows, fields) => {
            if (err) {
                console.log(err);
            }
            else {
                res.send(rows);
            }
        });
    }
});
//Create User
router.post("/users/:id/:name/:password/:email/:status/:lastpaydate", cors(), function (req, res) {
    con.query("INSERT INTO Member (name) VALUES (?, ?, ?, ?, ?, ?, ?)", [req.params.id, req.params.name, req.params.email, req.params.password, req.params.status, false, req.params.lastpaydate], (err, rows, fields) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(rows);
        }
    });
});

//Read User
router.get("/users/:id", function (req, res) {
    con.query("SELECT * FROM Member WHERE (member_id) = ?", [req.params.id], (err, rows, fields) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(rows);
        }
    })
});

//Login User
router.post("/users/:username", cors(), function (req, res) {
    con.query("SELECT * FROM Member WHERE email = ?", [req.params.username], (err, row, fields) => {
        if (err) {
            console.log(err);
        }
        else{
            res.send(rows);
        }  
    })
})

//Change User Password
router.put("/users/:username/:password", cors(), function (req, res) {
    con.query("UPDATE Member SET password = ?  WHERE email = ?", [req.params.password, req.params.username], (err, rows, fields) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(rows);
        }
    })
});

//Add Status
router.post("/status/:id/:name/:price", cors(), function (req, res) {
    con.query("INSERT INTO Member_Status (id, membership_type, cost) VALUES  (?, ?, ?)", [req.params.id, req.params.name, req.params.price], (err, rows, fields) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(rows);
        }
    })
});

//Edit Status
router.post("/status/:id/:price", cors(), function (req, res) {
    con.query("UPDATE Member_Status SET (cost) VALUES  (?)", [req.params.id], (err, rows, fields) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(rows);
        }
    })
});

//GET DataSummary Table
router.get("/admin", cors(), function (req, res) {
    con.query("SELECT * FROM DataSummary", (err, rows, fields) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(rows);
        }
    })
});
module.exports = router;
