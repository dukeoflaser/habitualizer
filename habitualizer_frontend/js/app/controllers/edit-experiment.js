angular
  .module('app')
  .controller('EditExperimentController', function($scope, $http, $state, experimentData, activityData, experimentFactory, habitFactory) {

    var exp = experimentData.experiment;
    if (activityData) var activity = activityData.activity;

    $scope.experiment = exp;
    $scope.experiment.substitute_attributes = exp.substitute;
    if (activityData) $scope.experiment.habit.activity_attributes = activity;



    $scope.submit = function(exp){

      experimentFactory.updateExperiment(exp.id, { experiment: exp })

      .then(checkForActivity);

      function checkForActivity(expRes) {

          //add catch method. Break into named functions

          if(exp.habit.activity_attributes){
            /////////////////////// - Submit to Habit - Activity - ///////////////////////
            //Submit activity after experiment is finished submission to prevent database lockup.

            //check to make sure that exp is successful
            if(exp.successful == false){
              exp.habit.activity_attributes.description = "";
            }

            // $http(req)
            habitFactory.updateHabit(exp.habit.id, { habit: exp.habit })
                .then(gotoExp);

                function gotoExp() {
                  // .then(function(habitRes){
                    //add catch method.
                    $state.go('user.show.experiment', { id: expRes.data.experiment.id })
                  // });
                }

            /////////////////////////////////////////////////////////////////
          } else {
            $state.go('user.show.experiment', { id: expRes.data.experiment.id })
          }

      }

    }

  });
