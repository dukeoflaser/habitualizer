angular
  .module('app')
  .controller('HomeController', function(user, userHabits) {
    this.email = user.email;


    console.log('The user:');
    console.log(user);
    console.log('userHabits');
    console.log(userHabits);

  });
