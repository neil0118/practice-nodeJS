const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "appuser",
  database: "node-complete",
  password: "password",
});

module.exports = pool.promise();
