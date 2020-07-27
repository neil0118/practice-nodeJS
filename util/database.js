const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "appuser", "password", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
