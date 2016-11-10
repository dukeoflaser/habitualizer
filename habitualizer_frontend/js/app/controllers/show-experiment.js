angular
  .module('app')
  .controller('ShowExperimentController', function($scope, experiment, activity) {

    $scope.experiment = experiment.data.experiment
    $scope.activity = activity.data.activity

    console.log('The Experiment:');
    console.log(experiment);

  });
