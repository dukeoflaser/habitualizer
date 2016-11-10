angular
  .module('app')
  .controller('CompleteController', function($scope, user, userCompleteHabits) {
    var habits = userCompleteHabits.data.habits;

    $scope.email = user.email;
    $scope.habits = habits;


    console.log('The user:');
    console.log(user);
    console.log('userCompleteHabits');
    console.log(userCompleteHabits);

  });
