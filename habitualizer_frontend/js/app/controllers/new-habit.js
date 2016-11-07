angular
  .module('app')
  .controller('NewHabitController', function($http, cues, rewards, activities) {

    console.log('Habit Cues');
    console.log(cues);
    console.log('Habit Rewards');
    console.log(rewards);
    console.log('Habit Activities');
    console.log(activities);


    // var data = {
    //   user_id: //curentUserId,
    //   name: 'Test Habit',
    //   complete: false,
    //   //create attributes in model that correspond with these.
    //   //They take in the hash, for each, find or create by id
    //   //then assign current habit (self?) cue_id equal to current cue's id.
    //   cues_attributes={
    //     {0: {id:, name:, :nature }}
    //   },
    //   rewards_attributes={}
    // }


    (function(){
      console.log('Postingg to habits#create.');

      $http({
        method: 'POST',
        url: 'http://localhost:3000/habits',
        data: {
          name: 'Test Habit',
          user_id: 1,
          complete: false
        }
      });

    })();






  });
