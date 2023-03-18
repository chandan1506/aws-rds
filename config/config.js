const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("db-1", "admin", "12345678", {
  host: "db-1.cat94gyutahz.us-east-2.rds.amazonaws.com",
  dialect: "mysql",
});

module.exports = { sequelize };
