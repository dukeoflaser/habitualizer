angular
  .module('app')
  .controller('NewHabitController', function($http, cues, rewards, activities) {

    console.log('Habit Cues');
    console.log(cues);
    console.log('Habit Rewards');
    console.log(rewards);
    console.log('Habit Activities');
    console.log(activities);

    var data = {
      "habit": {
        "user_id": 1,
        "name": 'Test Habit',
        "complete": false,
        "cues_attributes": {
          "0": {
            "id": '',
            "name": 'Getting Home From Work',
            "nature": '3'
          },
          "1": {
            "id": '',
            "name": 'Friends',
            "nature": '5'
          }
        },
        "rewards_attributes": {
          "0": {
            "id": '',
            "craving": "Relaxation"
          }
        },
        "activities_attributes": {
          "0": {
            "id": '',
            "description": "Jump on a trampoline."
          }
        }
      } //habit
    };

    (function(){
      console.log('Postingg to habits#create.');

      $http({
        method: 'POST',
        url: 'http://localhost:3000/habits',
        data: data
      });

    })();






  });
