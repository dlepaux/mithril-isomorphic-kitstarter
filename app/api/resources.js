'use strict';

var Promise = require('promise');

var Sequelize = require("sequelize");
var env       = process.env.NODE_ENV || "development";
var config    = require('./../config/database.json')[env];
var sequelize = new Sequelize(config.database, config.username, config.password, config);

module.exports = {
  dog: {
    get: function(id) {
      return new Promise(function(resolve) {
        resolve({
          id: id,
          name: 'Dolly'
        });
      });
    }
  },

  i18n: {
    get: function (id) {
      return new Promise(function(resolve) {
        sequelize
          .query('SELECT * FROM i18n WHERE i18n.id = ' + id)
          .spread(function(results, metadata) {
            // Each record will now be mapped to the project's DAO-Factory.
            var key = results[0].key;
            resolve(results[0]);
        });
      });
    }
  }
};
