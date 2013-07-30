// the app/scripts/main.js file, which defines our RequireJS config
require.config({
  paths: {
    angular: '../components/angular/angular',
    angularResource: '../components/angular-resource/angular-resource',
    angularCookies: '../components/angular-cookies/angular-cookies',
    angularSanitize: '../components/angular-sanitize/angular-sanitize',
    angularUIRouter: '../components/angular-ui-router/release/angular-ui-router',
    jquery: '../components/jquery/jquery',
    sidr: '../components/sidr/jquery.sidr.min',
    jqueryAnimateEnhanced: '../components/jquery.animate-enhanced/jquery.animate-enhanced.min',
    touchSwipe: '../components/jquery-touchswipe/jquery.touchSwipe',
    domReady: '../components/requirejs-domready/domReady',
    i18n: '../components/requirejs-i18n/i18n',
    lodash: '../components/lodash/lodash',
    jqueryMobileOrientationChange: 'vendor/jquery-mobile/orientationchange',
    jqueryMobileSupportOrientation: 'vendor/jquery-mobile/jquery.mobile.support.orientation',
    jqueryMobileThrottledResize: 'vendor/jquery-mobile/throttledresize',
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
    },
    angularUIRouter: {
      deps: [ 'angular' ]
    },
    sidr: {
      deps: [ 'jquery', 'jqueryAnimateEnhanced' ]
    },
    jqueryAnimateEnhanced: {
      deps: [ 'jquery' ]
    },
    touchSwipe: {
      deps: [ 'jquery' ]
    },
    jqueryMobileOrientationChange: {
      deps: [ 'jquery', 'jqueryMobileSupportOrientation', 'jqueryMobileThrottledResize']
    },
  },
  locale: localStorage.getItem('locale') || 'en'
});

require([
  // for the direct use(included in function parameters) in this function as well as global
  'angular',
  'app',
  'domReady',

  // angular libraries
  'angularResource',
  'angularCookies',
  'angularSanitize',
  'angularUIRouter',

  // User scripts - Any individual controller, service, directive or filter file
  'services/restService',
  'services/logger',
  'services/userService',
  'controllers/homeController',
  'controllers/menuController',
  'controllers/httpController',
  'controllers/aboutController',
  'directives/dwAccordion',
  'directives/dwExpander',
  'directives/dwNoti',
  'directives/ngbkFocus',

  // 3rd party libraries
  'lodash',
  'jqueryMobileOrientationChange'
],
  function (angular, app, domReady) {
    'use strict';

    app.config(['$stateProvider', '$urlRouterProvider',
          function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.
                when('', '/home').
                when('/', '/home');

            $stateProvider.state('home', {
              url: '/home',
              templateUrl: 'views/home.html',
              controller: 'HomeCtrl'
            }).
            state('about', {
              url: '/about',
              abstract: true,
              templateUrl: 'views/about.html',
              controller: 'AboutCtrl'
            }).
            state('about.info', {
              url: '',
              views: {
                '@about': {
                  templateUrl: 'views/about.info.html',
                  controller: 'AboutInfoCtrl'
                },
                'hint@about': {
                  templateUrl: 'views/about.hint.html',
                  controller: 'AboutHintCtrl'
                }
              }
            });
//                state('notifications', {
//                  url: '/notifications?type',
//                  templateUrl: 'views/notifications.html',
//                  controller: 'NotificationsCtrl',
//                  onEnter: function () {
//                    //
//                  },
//                  onExit: function () {
//                    //
//                  }
//                });
          }
        ]).run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
          $rootScope.$state = $state;
          $rootScope.$stateParams = $stateParams;
        }]);

    domReady(function() {
      //angular.bootstrap(document, ['seedsApp']);

      // The following is required if you want AngularJS Scenario tests to work
      $('html').addClass('ng-app: seedsApp');
    });
  }
);
