const express = require('express');
var mysql = require('mysql');
const router = express.Router();

/****************
 * MySQL CONNECT
****************/
//var eventKey = FHLUZYFIPS7BLMZVXO
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "BeGre@t2019",
    database: "makers_db"
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
router.post("/paymentHistory/:payment_id/:member_id/:paymentDate", function (req, res) {
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

router.get("/users", function (req, res){
    con.query("SELECT * FROM Member", (err, rows, fields)=>{
        if (err){
            console.log(err);
        }
        else{
            res.send(rows);
        }
    })
});


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
//Create User
router.post("/users/:id/:name/:password/:email/:status/:lastpaydate", function (req, res) {
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
router.get("/users/:id", function (req, res){
    con.query("SELECT * FROM Member WHERE (member_id) = ?", [req.params.id], (err, rows, fields)=>{
        if (err){
            console.log(err);
        }
        else{
            res.send(rows);
        }
    })
});

//Login User
router.post("/users/:username/:password",function(req, res){
    con.query("SELECT * FROM Member WHERE (password) = ? AND (email) = ?", [req.params.password, req.params.username], (err, rows, fields)=>{
        if (err){
            console.log(err);
        }
        else{
            res.send(rows);
        }  
    })
})

//Change User Password
router.put("/users/:username/:password",function(req, res){
    con.query("UPDATE Member SET password = ?  WHERE email = ?", [req.params.password, req.params.username], (err, rows, fields)=>{
        if (err){
            console.log(err);
        }
        else{
            res.send(rows);
        }  
    })
});

//Add Status
router.post("/status/:id/:name/:price", function(req, res){
    con.query("INSERT INTO Member_Status (id, membership_type, cost) VALUES  (?, ?, ?)", [req.params.id, req.params.name, req.params.price], (err, rows, fields)=>{
        if (err){
            console.log(err);
        }
        else{
            res.send(rows);
        } 
    })
});

//Edit Status
router.post("/status/:id/:price", function(req, res){
    con.query("UPDATE Member_Status SET (cost) VALUES  (?)", [req.params.id], (err, rows, fields)=>{
        if (err){
            console.log(err);
        }
        else{
            res.send(rows);
        } 
    })
});
module.exports = router;
