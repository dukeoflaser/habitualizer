angular
  .module('app')
  .controller('ExperimentController', function(user, userExperiments) {

    var exps = userExperiments.data.experiments;

    this.email = user.email;
    this.experiments = exps;


    console.log('The user:');
    console.log(user);
    console.log('userExperiments');
    console.log(userExperiments);

  });
