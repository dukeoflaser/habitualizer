angular
  .module('app')
  .controller('ExperimentController', function(user, userExperiments) {
    this.email = user.email;


    console.log('The user:');
    console.log(user);
    console.log('userExperiments');
    console.log(userExperiments);

  });
