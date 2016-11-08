angular
  .module('app')
  .controller('EditHabitController', function($scope, habit) {
    var hbt = habit.data.habit;

    $scope.habit = hbt;
    $scope.habit.user_id = hbt.user_id;
    $scope.habit.name = hbt.name;
    $scope.habit.complete = hbt.complete;
    $scope.habit.cue_attributes = hbt.cue;
    $scope.habit.cue_attributes.name = hbt.cue.name;
    $scope.habit.cue_attributes.nature = hbt.cue.nature;
    $scope.habit.reward_attributes = hbt.reward;
    $scope.habit.reward_attributes.craving = hbt.reward.craving;

    console.log('The editing habit:');
    console.log(habit);

  });
