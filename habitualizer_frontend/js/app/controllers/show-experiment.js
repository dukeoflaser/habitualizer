angular
  .module('app')
  .controller('ShowExperimentController', function($scope, experimentData, activityData, experimentFactory, formProcessor) {

    $scope.experiment = experimentData.experiment
    if (activityData) $scope.activity = activityData.activity

    $scope.delete = function(submission) {
      formProcessor.processExpDelete(submission);
    }
  });
