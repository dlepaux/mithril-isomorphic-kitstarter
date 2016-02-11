"use strict";

module.exports = function(sequelize, DataTypes) {
  var I18n = sequelize.define('i18n', {

    id: {
      field: 'id',
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    i18nTypeId: {
      field: 'i18n_type_id',
      type: DataTypes.INTEGER
    },
    key: {
      field: 'key',
      type: DataTypes.STRING
    }
  }, {
    timestamps: false,
    freezeTableName: true // Model tableName will be the same as the model name
  });

  return I18n;
};