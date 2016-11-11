angular
  .module('app')
  .controller('EditExperimentController', function($scope, $http, $state, experimentData, activityData, experimentFactory, habitFactory) {

    var exp = experimentData.experiment;
    var habit = exp.habit;
    if (activityData) var activity = activityData.activity;

    $scope.experiment = exp;
    $scope.experiment.substitute_attributes = exp.substitute;
    if (activityData) $scope.experiment.habit.activity_attributes = activity;



    $scope.submit = function(x){
      experimentFactory.updateExperiment(x.id, { experiment: x })
      .then(checkForActivity);
    }

    function checkForActivity(data) {
        if(habit.activity_attributes){
          if(exp.successful == false){
            habit.activity_attributes.description = "";
          }
          habitFactory.updateHabit(habit.id, { habit: habit })
            .then(gotoExp(data));
        } else {
          gotoExp(data);
        }
    }

    function gotoExp(data) {
      $state.go('user.show.experiment', { id: data.experiment.id })
    }

  });
