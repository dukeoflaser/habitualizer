angular
  .module('app')
  .controller('HomeController', function($scope, user, habitData) {

    $scope.email = user.email;
    $scope.habits = habitData.habits

  });
