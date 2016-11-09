angular
  .module('app')
  .controller('EditHabitController', function($scope, habit) {

    var hbt = habit.data.habit;

    $scope.habit = hbt;

    $scope.habit.name = hbt.name;
    $scope.habit.complete = hbt.complete;

    $scope.habit.cue_attributes = hbt.cue;
    $scope.habit.reward_attributes = hbt.reward;

    console.log('The editing habit:');
    console.log(habit);

  });
