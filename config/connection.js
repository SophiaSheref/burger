// Set up MySQL connection.
var mysql = require("mysql");

var connection;

// mysql://mequh0cnf9leinua:og3owmh6krn1oqoi@k3xio06abqa902qt.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/zgaaiwayxv11e4n1



connection = mysql.createConnection({
    host: 'k3xio06abqa902qt.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'mequh0cnf9leinua',
    password: "og3owmh6krn1oqoi",
    database: 'zgaaiwayxv11e4n1'
});


// // For Heroku Deployment vs. Local MySQL Database
// if(process.env.JAWSDB_URL){
//   connection = mysql.createConnection(process.env.JAWSDB_URL);
// }
// else{
//   connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Xdr5Cft6",
//   database: "burgers_db"
// });
// };

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
