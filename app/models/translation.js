"use strict";

module.exports = function(sequelize, DataTypes) {
  var Translation = sequelize.define('translations', {

    id: {
      field: 'id',
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    i18nId: {
      field: 'i18n_id',
      type: DataTypes.INTEGER
    },
    localeId: {
      field: 'locale_id',
      type: DataTypes.STRING
    },
    key: {
      field: 'text',
      type: DataTypes.TEXT
    }
  }, {
    timestamps: false,
    freezeTableName: true // Model tableName will be the same as the model name
  });

  return Translation;
};