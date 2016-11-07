angular
  .module('app')
  .controller('CompleteController', function(user, userCompleteHabits) {
    this.email = user.email;


    console.log('The user:');
    console.log(user);
    console.log('userCompleteHabits');
    console.log(userCompleteHabits);

  });
