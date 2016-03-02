"use strict";

module.exports = (sequelize, DataTypes) ->
  Locale = sequelize.define('locales', { id:
    field: 'id'
    type: DataTypes.STRING
    primaryKey: true
    autoIncrement: false },
    tableName: 'locales'
    timestamps: false
    freezeTableName: true)
  Locale