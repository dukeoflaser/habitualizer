angular
  .module('app')
  .controller('ShowHabitController', function($scope, $state, $http, habitData, habitFactory, formProcessor) {

    $scope.habit = habitData.habit;
    console.log(habitData);
    if($scope.habit.activity && $scope.habit.activity.description != "") {
      $scope.validActivity = true;
    }

    $scope.delete = function(submission) {
      formProcessor.processHabitDelete(submission);
    }

  });
