var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"",
    database: "merndemo"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected With Database!");
});

module.exports = connection;