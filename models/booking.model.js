const { models } = require("mongoose");

module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define("Booking", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    cart_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    fineshed: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    payment_method_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    delivery_method_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    discount_coupon_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Booking.associate = (models) => {
    Booking.belongsTo(models.Status, {
      foreignKey: "status_id",
      as: "status",
    });
    Booking.belongsTo(models.Payment_method, {
      foreignKey: "payment_method_id",
      as: "payment_method",
    })
    Booking.belongsTo(models.Delivery_method, {
      foreignKey: "delivery_method_id",
      as: "delivery_method",
    });
    Booking.belongsTo(models.Cart, {
      foreignKey: "cart_id",
      as: "bookings",
    });
    Booking.belongsTo(models.Discount, {
      foreignKey: "discount_coupon_id",
      as: "discount_coupon",
    })

  }
  return Booking;
};
