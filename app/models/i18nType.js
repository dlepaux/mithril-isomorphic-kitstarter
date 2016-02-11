"use strict";

module.exports = function(sequelize, DataTypes) {
  var I18nType = sequelize.define('i18n_types', {

    id: {
      field: 'id',
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      field: 'name',
      type: DataTypes.STRING
    }
  }, {
    tableName: 'i18n_types',
    timestamps: false,
    freezeTableName: true // Model tableName will be the same as the model name
  });

  return I18nType;
};