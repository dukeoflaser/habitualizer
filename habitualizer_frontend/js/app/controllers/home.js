angular
  .module('app')
  .controller('HomeController', function($scope, user, userHabitData) {

    $scope.email = user.email;
    $scope.habits = userHabitData.habits

  });
