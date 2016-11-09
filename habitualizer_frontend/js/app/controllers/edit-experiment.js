angular
  .module('app')
  .controller('EditExperimentController', function($scope, experiment) {

    var exp = experiment.data.experiment;

    $scope.experiment = exp;
    $scope.experiment.substitute_attributes = exp.substitute;


    console.log('The editing experiment:');
    console.log(experiment);

  });
