angular
  .module('app')
  .controller('ExperimentController', function($scope, user, experimentData) {

    $scope.email = user.email;
    $scope.experiments = experimentData.experiments;

  });
