const sequelize = require("../config/sequelize");
const { DataTypes } = require("sequelize");

const Votes = sequelize.define("Votes", {
  ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  MATCH_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  PLAYER_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  ATTENDANCE: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Votes;
