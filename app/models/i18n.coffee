'use strict'

module.exports = (sequelize, DataTypes) ->
  I18n = sequelize.define('i18n', {
    id:
      field: 'id'
      type: DataTypes.INTEGER
      primaryKey: true
      autoIncrement: true
    i18nTypeId:
      field: 'i18n_type_id'
      type: DataTypes.INTEGER
    key:
      field: 'key'
      type: DataTypes.STRING
  },
    tableName: 'i18n'
    timestamps: false
    freezeTableName: true)
  I18n