const { models } = require("mongoose");

module.exports = (sequelize, DataTypes) => {
  const Status = sequelize.define("Status", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
 Status.associate = (models) => {
    Status.hasMany(models.Booking, {
      foreignKey: "status_id",
      as: "status",
    });
    Status.hasMany(models.Ticket, {
      foreignKey: "ticket_status_id",
      as: "ticket_status",
    });
      Status.hasMany(models.Cart, {
      foreignKey: "Cart_id",
      as: "cart",
    });
  }

  return Status;
};
