"use strict";

module.exports = function(sequelize, DataTypes) {
  var Locale = sequelize.define('locales', {

    id: {
      field: 'id',
      type: DataTypes.STRING,
      primaryKey: true,
      autoIncrement: false
    }
  }, {
    tableName: 'locales',
    timestamps: false,
    freezeTableName: true // Model tableName will be the same as the model name
  });

  return Locale;
};