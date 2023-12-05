'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Phrases extends Model {
    static associate(models) {
    }
  }
  Phrases.init({
    phrase: {
        type: DataTypes.STRING,
        allowNull: false
      }
  }, {
    sequelize,
    modelName: 'Phrases',
    tableName: 'Phrases'
  });
  return Phrases;
};