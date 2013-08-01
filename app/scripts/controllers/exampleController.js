define(['controllers/controllers'],
  function(controllers) {
    'use strict';
    controllers.controller('ExamplesCtrl', ['$scope', '$$log',
      function($scope, $$log) {
        $$log.setCategory('ExamplesCtrl');
      }
    ]);
  }
);
