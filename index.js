/* jshint node: true */
'use strict';

var path = require('path');

module.exports = {
  name: 'ember-startup',
  included: function(app) {
    this._super.included(app);

    app.import(path.join(app.bowerDirectory), 'normalize-css/normalize.css');
  }
};
