const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
var con = require('./db');
const app = express()
const port = 9000


app.use(express.json())
app.use(cors())

var sql = "CREATE TABLE IF NOT EXISTS User (firstname VARCHAR(255), lastname VARCHAR(255),username VARCHAR(255), password VARCHAR(255))";
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Table created");
});  

const loginRouter = require('./routes/login')
app.use('/login', loginRouter)

const registerRouter = require('./routes/register')
app.use('/register', registerRouter)

const profileRouter = require('./routes/profile')
app.use('/profile', profileRouter)

app.listen(port, () => {
    console.log('Node js app started running')
})


