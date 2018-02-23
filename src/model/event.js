const Sequelize = require('../config/db')

module.exports = (Sequelize, DataTypes) => {
  return Sequelize.define('event', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  })
}