angular
  .module('app')
  .controller('NewExperimentController', function($http, $scope, $state, cues, rewards, activities, userHabits) {

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

    $scope.rewards = rewards.data.rewards;
    $scope.selectReward = function(reward){

      $scope.experiment.substitute_attributes = reward;
      $scope.experiment.substitute_attributes.craving = reward.craving;
    }

    //////////////////////////////////////////
    $scope.submit = function(exp) {
      var experiment = { experiment: exp };

      console.log('Posting to experiments#create.');

      $http({
        method: 'POST',
        url: 'http://localhost:3000/experiments',
        data: experiment
      }).then(function(response){
        //change this to success/fail.
        var exp = response.data.experiment;

        $state.go('user.show.experiment', { id: exp.id })
      });

    };
    //////////////////////////////////////////


  });
