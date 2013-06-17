define(['directives/directives'], function(directives) {
  'use strict';
  directives.directive('ngbkFocus', ['$rootScope', function($rootScope) {
    return {
      restrict: 'A',
      scope: true,
      link: function(scope, element, attrs) {
        element[0].focus();
      }
    };
  }]);
});
