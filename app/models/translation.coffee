"use strict"

module.exports = (sequelize, DataTypes) ->
  Translation = sequelize.define('translations', {
    id:
      field: 'id'
      type: DataTypes.INTEGER
      primaryKey: true
      autoIncrement: true
    i18nId:
      field: 'i18n_id'
      type: DataTypes.INTEGER
    localeId:
      field: 'locale_id'
      type: DataTypes.STRING
    key:
      field: 'text'
      type: DataTypes.TEXT
  },
    tableName: 'translations'
    timestamps: false
    freezeTableName: true)
  Translation