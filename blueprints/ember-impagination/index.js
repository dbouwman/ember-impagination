/*jshint node:true*/
module.exports = {
  description: 'Installation blueprint for ember-impagination',
  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addAddonsToProject({
      packages: [
        {name: 'ember-auto-import', target: '^1.2.15'},
      ]
    }).then(function() {
      return this.addPackagesToProject([
        {name: 'impagination', target: "^1.0.0-alpha.3"}
      ]);
    }.bind(this));
  }
};
