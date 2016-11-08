angular
  .module('app')
  .controller('EditExperimentController', function($scope, experiment) {

    var exp = experiment.data.experiment;

    $scope.experiment = exp;
    $scope.experiment.habit_id = exp.habit_id;
    $scope.experiment.successful = exp.successful;
    $scope.experiment.substitute_attributes = exp.substitute;
    $scope.experiment.substitute_attributes.craving = exp.substitute.craving;



    console.log('The editing experiment:');
    console.log(experiment);

  });
