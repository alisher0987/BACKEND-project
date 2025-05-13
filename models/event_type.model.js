const { models } = require("mongoose");

module.exports = (sequelize, DataTypes) => {
  const Event_type = sequelize.define("Event_type", {
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
  return Event_type;
};
