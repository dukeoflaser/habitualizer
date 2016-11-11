angular
  .module('app')
  .controller('ShowExperimentController', function($scope, $state, $http, experimentData, activityData, experimentFactory, formProcessor) {

    $scope.experiment = experimentData.experiment
    if (activityData) $scope.activity = activityData.activity


    $scope.delete = function(submission) {
      formProcessor.processExpDelete(submission);
    }

  });
