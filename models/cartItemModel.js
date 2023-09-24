const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/database");

exports.CartItem = sequelize.define("cartItem", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
