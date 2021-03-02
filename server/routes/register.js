const express = require('express')
const registerRouter = express.Router()
var connection = require('../db');


registerRouter.post('/', async (req, res) => {
    var record={firstname:req.body.firstname,
        lastname:req.body.lastname,
        username:req.body.username,
        password:req.body.password};
    try {
        connection.query('INSERT INTO user SET  ?',record, function (err, result) {
            if (err) throw err;
            res.send({
                data : true
            })
            console.log("1 record inserted");
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

module.exports = registerRouter