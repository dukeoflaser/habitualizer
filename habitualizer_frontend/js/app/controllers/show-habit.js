angular
  .module('app')
  .controller('ShowHabitController', function($scope, $state, $http, habitData) {

    $scope.habit = habitData.habit;

    console.log('The habit:');
    console.log($scope.habit);

    $scope.delete = function(hbt){
      var confirmDelete = confirm("Are you certain you want to delete this habit along with it's experiments?")

      if (confirmDelete) {

        var req = {
          method: 'DELETE',
          url: 'http://localhost:3000/habits/' + hbt.id
        }

        $http(req)
          .then(function(res){
            $state.go('user.home');
          });

        hbt.experiments.forEach(function(exp, index){

          //need to refactor and use delete exp method here.

        });

      }


    }

  });
