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

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect("mongodb://localhost:27017/shop")
    .then((client) => {
      console.log("Connected!");
      _db = client.db();
      callback();
    })
    .catch((err) => {
      console.log(err);
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No database Found!";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
