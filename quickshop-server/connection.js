const mysql = require("mysql2");

const mysqlConnection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

mysqlConnection.connect((error) => {
  if (error) {
    console.log(
      "Error in DB Connection: " + JSON.stringify(error, undefined, 2)
    );
  } else {
    console.log("DB Connected Successfully");
  }
});

module.exports = mysqlConnection;
