angular
  .module('app')
  .controller('ExperimentController', function($scope, user, userExperiments) {

    var exps = userExperiments.data.experiments;

    $scope.email = user.email;
    $scope.experiments = exps;
    // this.experiments.substitute.name = exps.substitute.name;
    console.log('experiments.substitute:');
    console.log(exps);



    console.log('The user:');
    console.log(user);
    console.log('userExperiments');
    console.log(userExperiments);

  });
