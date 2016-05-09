/*jshint node:true*/
'use strict';

module.exports = {
  description: '',

  normalizeEntityName() {
    // this prevents an error when the entityName is
    // not specified (since that doesn't actually matter
    // to us
  },

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  afterInstall(options) {
    return this.addAddonsToProject({
      packages: [{
        name: 'ember-cli-less',
        target: '1.5.3'
      }, {
        name: 'ember-component-css',
        target: '0.2.0-beta-4'
      }]
    }).then(() => {
      this.addBowerPackagesToProject([{
        name: 'normalize-css',
        target: 'normalize.css#^4.1.1'
      }]);
    });
  }
};
