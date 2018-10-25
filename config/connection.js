// Set up MySQL connection.
var mysql = require("mysql");

require("dotenv").config();

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
// mysql://beab3985482090:ce7c02ac@us-cdbr-iron-east-01.cleardb.net/heroku_2bdf9e33fadacf6?reconnect=true
var connection = mysql.createConnection({
  host: "us-cdbr-iron-east-01.cleardb.net",
  port: 3306,
  user: "beab3985482090",
  password: ce7c02ac,
  database: "heroku_2bdf9e33fadacf6"
});
}
// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
