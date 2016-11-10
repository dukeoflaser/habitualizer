angular
  .module('app')
  .controller('EditHabitController', function($scope, $state, $http, habit) {

    var hbt = habit.data.habit;

    $scope.habit = hbt;
    $scope.habit.cue_attributes = hbt.cue;
    $scope.habit.reward_attributes = hbt.reward;
    // $scope.habit.cue_attributes.has_been_updated = true;
    // $scope.habit.reward_attributes.has_been_updated = true;

    $scope.submit = function(hbt){

      hbt.cue_attributes.has_been_updated = true;
      hbt.reward_attributes.has_been_updated = true;

      console.log('Patching to habits#update')
      console.log(hbt);

      var habit = { habit: hbt }
      var req = {
        method: 'PATCH',
        url: 'http://localhost:3000/habits/' + hbt.id,
        data: habit
      }

      $http(req)
        .then(function(response){
          console.log(response);
          //add catch method.
          $state.go('user.show.habit', { id: response.data.habit.id });
        });
    }

  });
