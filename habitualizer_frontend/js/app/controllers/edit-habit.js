angular
  .module('app')
  .controller('EditHabitController', function($scope, habitData, habitFactory, formProcessor) {

    var hbt = habitData.habit;

    $scope.habit = hbt;
    $scope.habit.cue_attributes = hbt.cue;
    $scope.habit.reward_attributes = hbt.reward;

    $scope.submit = function(submission){
      formProcessor.processHabitUpdate(submission);
    }

  });
