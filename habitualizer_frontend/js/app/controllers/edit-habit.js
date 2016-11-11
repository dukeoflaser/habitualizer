angular
  .module('app')
  .controller('EditHabitController', function($scope, $state, habitData, habitFactory) {

    var hbt = habitData.habit;

    $scope.habit = hbt;
    $scope.habit.cue_attributes = hbt.cue;
    $scope.habit.reward_attributes = hbt.reward;


    $scope.submit = function(submission){
      processHabitUpdate(submission);
    }

    function processHabitUpdate(h){
      h.cue_attributes.has_been_updated = true;
      h.reward_attributes.has_been_updated = true;

      habitFactory.updateHabit(h.id, { habit: h })

        .then(function(data){
          $state.go('user.show.habit', { id: data.habit.id });
        });
    }



  });
