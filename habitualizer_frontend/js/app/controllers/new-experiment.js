angular
  .module('app')
  .controller('NewExperimentController', function($http, $scope, cues, rewards, activities, userHabits) {

    $scope.habits = userHabits.data.habits;
    console.log('$scope.habits');
    console.log($scope.habits);

    $scope.selectHabit = function(habit){
      $scope.experiment = {}
      $scope.experiment.habit_name = habit.name;
      $scope.experiment.habit_id = habit.id;
    }

    $scope.rewards = rewards.data.rewards;
    $scope.selectReward = function(reward){
      $scope.experiment = {};
      $scope.experiment.substitute_attributes = reward;
      $scope.experiment.substitute_attributes.craving = reward.craving;
    }

//////////////////////////////////////////
    $scope.submit = function(exp) {
      var experiment = { experiment: exp };

      console.log('Posting to experiments#create.');

      $http({
        method: 'POST',
        url: 'http://localhost:3000/experiments',
        data: experiment
      }).then(function(response){
        console.log(response);
      });

    };
//////////////////////////////////////////





    console.log('Cues');
    console.log(cues);
    console.log('Rewards');
    console.log(rewards);
    console.log('Activities');
    console.log(activities);
    console.log('Users Habits');
    console.log(userHabits);

///////////////////////DATA FORMAT///////////////////////
    // var data = {
    //   "experiment": {
    //     "habit_id": 2, //active_habit.id
    //     "successful": false,
    //     "substitute_attributes": {
    //       "craving": 'TEST BANANAS'
    //     }
    //   }
    // };


  });
