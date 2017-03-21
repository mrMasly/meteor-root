Package.describe({
  name: 'mrmasly:meteor-root',
  version: '0.0.1',
  summary: 'add Meteor.root - absolute path to meteor project folder',
  git: 'https://github.com/mrMasly/meteor-root',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.3.2');
  api.use('ecmascript@0.6.3');
  api.use('coffeescript@1.12.3_1');
  api.addFiles('server.coffee', 'server');
});
