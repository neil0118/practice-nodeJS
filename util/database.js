// const Sequelize = require("sequelize");

// const sequelize = new Sequelize("node-complete", "appuser", "password", {
//   dialect: "mysql",
//   host: "localhost",
// });

// module.exports = sequelize;

const mongodb = require("mongodb");
//db.auth("useradmin", "adminpassword")
//const MONGO_URI = 'mongodb://localhost:27017/auth';
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
  MongoClient.connect("mongodb://localhost:27017/node-complete")
    .then((result) => {
      console.log("Connected!");
      callback(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = mongoConnect;
