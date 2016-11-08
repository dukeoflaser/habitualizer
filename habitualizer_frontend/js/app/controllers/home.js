angular
  .module('app')
  .controller('HomeController', function(user, userHabits) {
    var habits = userHabits.data.habits;

    this.email = user.email;
    this.habits = habits;

    console.log('The user:');
    console.log(user);
    console.log('habits');
    console.log(this.habits);

  });
