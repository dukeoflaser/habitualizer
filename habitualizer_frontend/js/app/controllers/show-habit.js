angular
  .module('app')
  .controller('ShowHabitController', function($scope, $state, $http, habit) {

    $scope.habit = habit.data.habit;

    console.log('The habit:');
    console.log(habit);

    $scope.delete = function(habitId){
      var confirmDelete = confirm("Are you certain you want to delete this habit?")

      if (confirmDelete) {

        var req = {
          method: 'DELETE',
          url: 'http://localhost:3000/habits/' + habitId
        }

        $http(req)
          .then(function(res){
            $state.go('user.home');
          });

      }
    }

  });
