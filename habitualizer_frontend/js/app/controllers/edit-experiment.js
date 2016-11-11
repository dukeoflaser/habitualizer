angular
  .module('app')
  .controller('EditExperimentController', function($scope, $http, $state, experimentData, activityData, experimentFactory, habitFactory) {

    var exp = experimentData.experiment;
    if (activityData) var activity = activityData.activity;

    $scope.experiment = exp;
    $scope.experiment.substitute_attributes = exp.substitute;
    if (activityData) $scope.experiment.habit.activity_attributes = activity;



    $scope.submit = function(exp){
      console.log('From submit experiment update - exp')
      console.log(exp);
      // var experiment = { experiment: exp };

      experimentFactory.updateExperiment(exp.id, { experiment: exp })

        .then(function(expRes){
          console.log(expRes);
          //add catch method. Break into named functions



                if(exp.habit.activity_attributes){
                  /////////////////////// - Submit to Habit - Activity - ///////////////////////
                  //Submit activity after experiment is finished submission to prevent database lockup.

                  //check to make sure that exp is successful
                  if(exp.successful == false){
                    exp.habit.activity_attributes.description = "";
                  }

                  // var habit = { habit: exp.habit }
                  // console.log('Patching Activity to Habit#update');
                  // console.log(habit)

                  // var req = {
                  //   method: 'PATCH',
                  //   url: 'http://localhost:3000/habits/' + exp.habit.id,
                  //   data: habit
                  // }

                  // $http(req)
                  habitFactory.updateHabit(exp.habit.id, { habit: exp.habit })
                    .then(function(habitRes){
                      console.log(habitRes);
                      //add catch method.
                      $state.go('user.show.experiment', { id: expRes.data.experiment.id })
                    });




                  /////////////////////////////////////////////////////////////////
                } else {
                  $state.go('user.show.experiment', { id: expRes.data.experiment.id })
                }
        });


    }

  });
