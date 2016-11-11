angular
  .module('app')
  .controller('EditHabitController', function($scope, $state, $http, habitData, habitFactory) {

    var hbt = habitData.habit;

    $scope.habit = hbt;
    $scope.habit.cue_attributes = hbt.cue;
    $scope.habit.reward_attributes = hbt.reward;

    $scope.submit = function(hbt){

      hbt.cue_attributes.has_been_updated = true;
      hbt.reward_attributes.has_been_updated = true;

      console.log('Patching to habits#update')
      console.log(hbt);

      // var habit = { habit: hbt }

      habitFactory.updateHabit(hbt.id, { habit: hbt })

      // var req = {
      //   method: 'PATCH',
      //   url: 'http://localhost:3000/habits/' + hbt.id,
      //   data: habit
      // }

      // $http(req)
        .then(function(data){
          console.log(data);
          //add catch method.
          $state.go('user.show.habit', { id: data.habit.id });
        });
    }

  });
