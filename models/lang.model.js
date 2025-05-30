const { models } = require("mongoose");

module.exports = (sequelize, DataTypes) => {
  const Lang = sequelize.define("Lang", {
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
  Lang.associate = (models) => {
    Lang.hasMany(models.Customer, {
      foreignKey: "lang_id",
      as: "customers",
    });
    Lang.hasMany(models.Event, {
      foreignKey: "lang_id",
      as: "events",
    });
  }
  return Lang;
};
