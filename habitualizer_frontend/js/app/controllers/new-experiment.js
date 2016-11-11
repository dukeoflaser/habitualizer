angular
  .module('app')
  .controller('NewExperimentController', function($scope, rewardsData, userHabits, experimentFactory, formProcessor) {

    var habits = userHabits.data.habits;
    $scope.experiment = {};
    $scope.habits = habits;

    var lastHabit = habits[habits.length - 1];
    $scope.habit_name = lastHabit.name;
    $scope.experiment.habit_id = lastHabit.id;
    $scope.currentReward = lastHabit.reward.craving;

    $scope.selectHabit = function(habit){
      $scope.currentReward = habit.reward.craving;
      $scope.searchHabit.name = habit.name;
      $scope.habit_name = habit.name;
      $scope.experiment.habit_id = habit.id;
    }

    $scope.rewards = rewardsData.rewards;
    $scope.selectReward = function(reward){

      $scope.experiment.substitute_attributes = reward;
      $scope.experiment.substitute_attributes.craving = reward.craving;
    }

    $scope.submit = function(submission){
      formProcessor.processExpCreate(submission);
    }


  });
