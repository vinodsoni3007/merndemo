const express = require('express')
const loginRouter = express.Router()
var connection = require('../db');

loginRouter.get('/', (req,res) => {
    console.log('inside login')
    res.send({
        name: 'Hitesh',
        empId : '1234'
    })
})

loginRouter.post('/', async(req,res) => {
    console.log('inside post api');
    console.log(req.body)
    var uname=req.body.username;
    var pass= req.body.password;
    try {
        const qry='SELECT * FROM user WHERE  username= ? AND password= ?';
        const result =  await connection.query(qry,[uname,pass], function (err, ress) {
            if (err) throw err;
            console.log(result);
            res.send({
                data : result
            })
          });
    }
    catch (e) {
        console.log(e)
        res.send({
            data : false,
            error : e
        })
    }  
})

module.exports = loginRouter
