angular
  .module('app')
  .controller('EditExperimentController', function($scope, $state, experimentData, activityData, formProcessor) {

    var exp = experimentData.experiment;
    var habit = exp.habit;
    if (activityData) var activity = activityData.activity;

    $scope.experiment = exp;
    $scope.experiment.substitute_attributes = exp.substitute;
    if (activityData) $scope.experiment.habit.activity_attributes = activity;

    $scope.submit = function(submission){
      formProcessor.processExpUpdate(submission, exp, habit);
    }





  });
