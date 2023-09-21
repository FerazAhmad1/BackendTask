const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("node-complete", "root", "F@khan1995", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
