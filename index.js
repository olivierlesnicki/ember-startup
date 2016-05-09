/* jshint node: true */
'use strict';

var path = require('path');

module.exports = {
  name: 'ember-startup',

  included: function(app) {
    this._super.included(app);
    app.import('/bower_components/normalize-css/normalize.css');
  },

  isDevelopingAddon: function() {
    return true;
  }

};
