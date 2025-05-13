const { models } = require("mongoose");

module.exports = (sequelize, DataTypes) => {
  const Venue_photo = sequelize.define("Venue_photo", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    venueld: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  Venue_photo.associate = (models) => {
    Venue_photo.belongsTo(models.Venue, {
      foreignKey: "venueld",
      as: "venue",
    });
  };
  return Venue_photo;
};
