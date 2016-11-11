angular
  .module('app')
  .controller('EditExperimentController', function($scope, $http, $state, experimentData, activityData, experimentFactory, habitFactory) {

    var exp = experimentData.experiment;
    if (activityData) var activity = activityData.activity;

    $scope.experiment = exp;
    $scope.experiment.substitute_attributes = exp.substitute;
    if (activityData) $scope.experiment.habit.activity_attributes = activity;



    $scope.submit = function(x){
      experimentFactory.updateExperiment(x.id, { experiment: x })
      .then(checkForActivity);
    }

    function checkForActivity(expRes) {

        if(exp.habit.activity_attributes){

          if(exp.successful == false){
            exp.habit.activity_attributes.description = "";
          }

          habitFactory.updateHabit(exp.habit.id, { habit: exp.habit })
              .then(gotoExp(expRes.data.experiment.id));

        } else {
          gotoExp(expRes.data.experiment.id);
        }

    }

    function gotoExp(id) {
      $state.go('user.show.experiment', { id: id })
    }

  });
