'use strict';

// Requires
var Promise = require('promise');

module.exports = {
	cat: {
    get: function(id) {
      return new Promise(function(resolve) {
        resolve({
          id: id,
          name: 'Kitty'
        });
      });
    }
	}
};