'use strict';

// Requires
var Promise = require('promise');
var store = require('./../store/client.js');

// Export data loaded
module.exports = {
  spa: {
    get: function (id) {
      console.log(store);
      return new Promise(function(resolve) {
        var scope = {};

        store.load('cat', 123).then( function (cat) {
          scope.myCat = cat;
        });
        
        /*store.load('i18n', 10).then( function (i18n) {
          scope.i18n = i18n;
        });*/
        resolve(scope);
      });
    }
	}
};