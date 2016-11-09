angular
  .module('app')
  .controller('ShowExperimentController', function($scope, experiment) {

    $scope.experiment = experiment.data.experiment
    
    console.log('The Experiment:');
    console.log(experiment);

  });
