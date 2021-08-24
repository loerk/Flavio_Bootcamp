const Sequelize = require("sequelize");

const user = "franziska";
const password = "";
const host = "localhost";
const database = "testingpassport";

const sequelize = new Sequelize(database, user, password, {
  host,
  dialect: "postgress",
  logging: false,
});

module.exports = sequelize;
