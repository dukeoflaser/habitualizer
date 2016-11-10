angular
  .module('app')
  .controller('CompleteController', function($scope, user, completeHabitData) {

    $scope.email = user.email;
    $scope.habits = completeHabitData.habits;

  });
