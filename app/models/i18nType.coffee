'use strict'

module.exports = (sequelize, DataTypes) ->
  I18nType = sequelize.define('i18n_types', {
    id:
      field: 'id'
      type: DataTypes.INTEGER
      primaryKey: true
      autoIncrement: true
    name:
      field: 'name'
      type: DataTypes.STRING
  },
    tableName: 'i18n_types'
    timestamps: false
    freezeTableName: true)
  I18nType