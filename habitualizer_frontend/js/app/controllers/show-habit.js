angular
  .module('app')
  .controller('ShowHabitController', function($scope, habit, $stateParams) {

    $scope.habit = habit.data.habit;

    console.log('The habit:');
    console.log(habit);

  });
