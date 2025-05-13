const { models } = require("mongoose");

module.exports = (sequelize, DataTypes) => {
  const Delivery_method = sequelize.define("Delivery_method", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Delivery_method;
};
