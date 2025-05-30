const { models } = require("mongoose");

module.exports = (sequelize, DataTypes) => {
  const Cart_item = sequelize.define("Cart_item", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    ticket_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cart_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
 Cart_item.associate = (models) => {
    Cart_item.belongsTo(models.Cart, {
      foreignKey: "cart_id",
      as: "cart",
    });
    Cart_item.belongsTo(models.Ticket, {
      foreignKey: "ticket_id",
      as: "ticket",
    });
  }
  
  return Cart_item;
};
