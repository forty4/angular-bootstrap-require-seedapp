define(['controllers/controllers', 'services/userService'],
  function(controllers) {
    'use strict';
    controllers.controller('RootCtrl', ['$scope', 'UserService',
      function($scope, UserService) {
        $scope.name = UserService.getUser();
        $('#test').html('<h3>jQuery Test</h><h4>Hello ' + $scope.name + '</h4>');
      }
    ]);
  }
);
