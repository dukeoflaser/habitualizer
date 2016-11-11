angular
  .module('app')
  .controller('ShowHabitController', function($scope, habitData, habitFactory, formProcessor) {

    $scope.habit = habitData.habit;
    if($scope.habit.activity && $scope.habit.activity.description != "") {
      $scope.validActivity = true;
    }

    $scope.delete = function(submission) {
      formProcessor.processHabitDelete(submission);
    }

  });
