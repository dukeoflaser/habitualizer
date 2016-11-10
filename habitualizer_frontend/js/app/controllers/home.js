angular
  .module('app')
  .controller('HomeController', function($scope, user, userHabits) {
    console.log(userHabits)

    $scope.email = user.email;
    $scope.habits = userHabits;

    console.log('The user:');
    console.log(user);
    console.log('habits');
    console.log(this.habits);
  });
