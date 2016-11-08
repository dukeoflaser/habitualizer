angular
  .module('app')
  .controller('NewHabitController', function($http, $scope, cues, rewards, activities) {

    console.log('Habit Cues');
    console.log(cues);
    console.log('Habit Rewards');
    console.log(rewards);
    console.log('Habit Activities');
    console.log(activities);

    var data = {
      "habit": {
        "user_id": 1,
        "name": 'TEST Habit',
        "complete": false,
        "cue_attributes": {
          "name": 'TEST Getting Home From Work',
          "nature": '3'
        },
        "reward_attributes": {
            "craving": "TEST Relaxation"
        },
        "activities_attributes": {
          "0": {
            "description": "TEST Jump on a trampoline."
          }
        }
      } //habit
    };

//////////////////////////////////////////
$scope.submit = function(hbt) {
  var habit = { habit: hbt }

  console.log('Posting to habits#create.');
  // console.log(habit);
  // console.log(data);

  $http({
    method: 'POST',
    url: 'http://localhost:3000/habits',
    data: habit
  }).then(function(response){
    console.log(response);
  });

}
//////////////////////////////////////////







  });
