angular
  .module('app')
  .controller('NewExperimentController', function($scope, rewardsData, habitData, experimentFactory, formProcessor) {

    var habits = habitData.habits;
    var lastHabit = habits[habits.length - 1];

    $scope.habits = habits;
    $scope.lastHabit = lastHabit;
    $scope.experiment = {};

    $scope.habitName = lastHabit.name;
    $scope.experiment.habit_id = lastHabit.id;
    $scope.currentReward = lastHabit.reward.craving;
    $scope.rewards = rewardsData.rewards;

    $scope.selectHabit = function(habit){
      $scope.currentReward = habit.reward.craving;
      $scope.searchHabit.name = habit.name;
      $scope.habitName = habit.name;
      $scope.experiment.habit_id = habit.id;
    }

    $scope.selectReward = function(reward){
      $scope.experiment.substitute_attributes = reward;
    }

    $scope.submit = function(submission){
      formProcessor.processExpCreate(submission);
    }

  });
