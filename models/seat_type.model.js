const { models } = require("mongoose");

module.exports = (sequelize, DataTypes) => {
  const Seat_type = sequelize.define("Seat_type", {
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

  return Seat_type;
};
