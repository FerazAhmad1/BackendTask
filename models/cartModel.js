const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../utils/database");

exports.Cart = sequelize.define("cart", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    unique: true,
    primaryKey: true,
  },
});
