angular
  .module('app')
  .controller('NewExperimentController', function($http, cues, rewards, activities) {

    console.log('Cues');
    console.log(cues);
    console.log('Rewards');
    console.log(rewards);
    console.log('Activities');
    console.log(activities);


    var data = {
      "experiment": {
        "habit_id": 2, //active_habit.id
        "successful": false,
        "substitute_attributes": {
          "id": '',
          "craving": 'TEST Biscuits'
        }
      } //habit
    };

    (function(){
      console.log('Postingg to experiments#create.');

      $http({
        method: 'POST',
        url: 'http://localhost:3000/experiments',
        data: data
      });

    })();

  });
