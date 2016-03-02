'use strict';

// Requires
var Promise = require('promise');
var i18n    = require('./../resources/i18n.js');
var cat     = require('./../resources/cat.js');

// Export data loaded
module.exports = {
  spa: {
    get: function (id) {
      return new Promise(function(resolve) {
        var scope = {};

        cat.cat.get(10).then( function (cat) {
          scope.myCat = cat;
        });
          
        i18n.i18n.get(10).then( function (i18n) {
          scope.i18n = i18n;
          resolve(scope);
        });
      });
    }
	}
};
