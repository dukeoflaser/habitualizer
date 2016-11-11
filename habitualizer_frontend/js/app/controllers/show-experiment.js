angular
  .module('app')
  .controller('ShowExperimentController', function($scope, $state, $http, experimentData, activityData, experimentFactory) {

    $scope.experiment = experimentData.experiment
    if (activityData) $scope.activity = activityData.activity

    $scope.delete = function(expId){
      var confirmDelete = confirm("Are you certain you want to delete this experiment?")

      if (confirmDelete) {

          experimentFactory.deleteExperiment(expId)

          .then(function(res){
            $state.go('user.home');
          });

      }
    }

  });
