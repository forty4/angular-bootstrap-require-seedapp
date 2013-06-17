// the app/scripts/main.js file, which defines our RequireJS config
require.config({
  paths: {
    angular: '../components/angular/angular',
    angularResource: '../components/angular-resource/angular-resource',
    angularCookies: '../components/angular-cookies/angular-cookies',
    angularSanitize: '../components/angular-sanitize/angular-sanitize',
    jquery: '../components/jquery/jquery',
    domReady: '../components/requirejs-domready/domReady'
  },
  shim: {
    angular: {
      deps: [ 'jquery'],
      exports: 'angular'
    },
    angularResource: {
      deps: [ 'angular' ]
    },
    angularCookies: {
      deps: [ 'angular' ]
    },
    angularSanitize: {
      deps: [ 'angular' ]
    }
  }
});

require([
  'angular',
  'app',
  'domReady',
  'angularResource',
  'angularCookies',
  'angularSanitize',
  'services/userService',
  'controllers/rootController',
  'directives/ngbkFocus'
  // Any individual controller, service, directive or filter file
  // that you add will need to be pulled in here.
],
  function (angular, app, domReady) {
    'use strict';

    app.config(['$routeProvider',
      function($routeProvider) {
        $routeProvider.when('/', {
          templateUrl: 'views/main.html',
          controller: 'RootCtrl'
        });
      }
    ]);

    domReady(function() {
      angular.bootstrap(document, ['seedsApp']);

      // The following is required if you want AngularJS Scenario tests to work
      $('html').addClass('ng-app: seedsApp');
    });
  }
);
