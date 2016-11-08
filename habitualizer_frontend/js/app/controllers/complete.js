angular
  .module('app')
  .controller('CompleteController', function(user, userCompleteHabits) {
    var habits = userCompleteHabits.data.habits;

    this.email = user.email;
    this.habits = habits;


    console.log('The user:');
    console.log(user);
    console.log('userCompleteHabits');
    console.log(userCompleteHabits);

  });
