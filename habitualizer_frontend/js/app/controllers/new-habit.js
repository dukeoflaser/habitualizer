angular
  .module('app')
  .controller('NewHabitController', function($http, $scope, $state, user, cuesData, rewardsData, habitFactory) {

    $scope.habit = {}
    $scope.habit.user_id = user.id

    $scope.cues = cuesData.cues;
    $scope.rewards = rewardsData.rewards;

    $scope.selectCue = function(cue){
      $scope.habit.cue_attributes.name = cue.name;
      $scope.habit.cue_attributes.nature = cue.nature;
    }

    $scope.selectReward = function(reward){
      $scope.habit.reward_attributes = {};
      $scope.habit.reward_attributes.craving = reward.craving;
    }

    //////////////////////////////////////////
    $scope.submit = function(hbt) {

      habitFactory.createHabit({ habit: hbt })

      .then(function(data){
        var habit = data.habit;
        $state.go('user.show.habit', { id: habit.id });
      });

    }
    //////////////////////////////////////////







  });
