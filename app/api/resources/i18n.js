'use strict';

module.exports = {
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