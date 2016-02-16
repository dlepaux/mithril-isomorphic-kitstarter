'use strict';

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