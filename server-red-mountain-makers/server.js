const express = require('express');
const path = require('path');
var mysql = require('mysql');
const router = express.Router();

/****************
 * MySQL CONNECT
****************/
var eventKey = FHLUZYFIPS7BLMZVXO
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
//Create new payment
router.post("/paymentHistory/:payment_id:member_id:paymentDate", function (req, res) {
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
//Specific member history
router.get("/paymentHistory/:member_id", function (req, res) {
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

module.exports = router;
