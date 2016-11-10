angular
  .module('app')
  .controller('EditExperimentController', function($scope, $http, $state, experimentData, activityData) {

    var exp = experimentData.experiment;
    if (activityData) var activity = activityData.activity;




    console.log('The Activity');
    console.log(activity);

    console.log('exp')
    console.log(exp)


    $scope.experiment = exp;
    $scope.experiment.substitute_attributes = exp.substitute;
    $scope.experiment.habit.activity_attributes = activity;
    //double check to make sure habit/activity values are loaded.


    console.log('The Initial editing experiment:');
    console.log(experimentData);

    // if(exp.habit.activity_id){
    //   var activity_req = {
    //     method: 'GET',
    //     url: 'http://localhost:3000/activity/' + exp.habit.activity_id
    //   }
    //
    //   $http(activity_request)
    //     .then(function(response){
    //       exp.habit.activity_attributes = response.data
    //     });
    // }


    $scope.submit = function(exp){
      console.log(exp);
      var experiment = { experiment: exp };
      var req = {
        method: 'PATCH',
        url: 'http://localhost:3000/experiments/' + exp.id,
        data: experiment
      }


      $http(req)
        .then(function(response){
          console.log(response);
          //add catch method. Break into named functions
          $state.go('user.show.experiment', { id: response.data.experiment.id })
        });



      if(exp.habit.activity_attributes){
        //check to make sure that exp is successful

        if(exp.successful == false){
          exp.habit.activity_attributes.description = "";
        }

        var habit = { habit: exp.habit }
        console.log('Patching Activity to Habit#update');
        console.log(habit)

        var req = {
          method: 'PATCH',
          url: 'http://localhost:3000/habits/' + exp.habit.id,
          data: habit
        }

        $http(req)
          .then(function(response){
            console.log(response);
            //add catch method.
          });


      }
    }

  });
