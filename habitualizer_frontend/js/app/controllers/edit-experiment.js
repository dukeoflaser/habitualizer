angular
  .module('app')
  .controller('EditExperimentController', function($scope, $http, $state, experiment) {

    var exp = experiment.data.experiment;

    $scope.experiment = exp;
    $scope.experiment.substitute_attributes = exp.substitute;


    console.log('The editing experiment:');
    console.log(experiment);

    $scope.submit = function(exp){
      var experiment = { experiment: exp };
      var req = {
        method: 'PATCH',
        url: 'http://localhost:3000/experiments/' + exp.id,
        data: experiment
      }


      $http(req)
        .then(function(response){
          console.log(response);
          //add catch method. Break into named functions
          $state.go('user.show.experiment', { id: response.data.experiment.id })
        });
    }

  });
