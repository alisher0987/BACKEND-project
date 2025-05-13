module.exports = (sequelize, DataTypes) => {
  const Venue = sequelize.define("Venue", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    site: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    schema: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    regionld: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    districtld: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  Venue.associate = (models) => {
    Venue.belongsTo(models.Region, {
      foreignKey: "regionld",
      as: "region",
    });
    Venue.belongsTo(models.District, {
      foreignKey: "districtld",
      as: "district",
    });
    Venue.hasMany(models.Venue_venuetype, {
      foreignKey: "venue_id",
      as: "venue_type",
    });

  }
  return Venue;
};
