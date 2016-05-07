/*jshint node:true*/
module.exports = {
  description: '',

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  afterInstall: function(options) {
    return this.addAddonsToProject([{
      name: 'ember-cli-less',
      target: '1.5.3'
    }]).then(function () {
      return addBowerPackagesToProject([{
        name: 'normalize-css',
        target: 'normalize.css#^4.1.1'
      }]);
    });
  }
};
