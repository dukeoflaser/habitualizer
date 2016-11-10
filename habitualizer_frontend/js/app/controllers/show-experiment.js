angular
  .module('app')
  .controller('ShowExperimentController', function($scope, $state, $http, experimentData, activity) {

    $scope.experiment = experimentData.experiment
    if (activity) $scope.activity = activity.data.activity

    console.log('The experimentData:');
    console.log(experimentData);

    $scope.delete = function(expId){
      var confirmDelete = confirm("Are you certain you want to delete this experiment?")

      if (confirmDelete) {

        var req = {
          method: 'DELETE',
          url: 'http://localhost:3000/experiments/' + expId
        }

        $http(req)
          .then(function(res){
            $state.go('user.home');
          });

      }
    }

  });
