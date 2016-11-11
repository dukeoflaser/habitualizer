function formProcessor(habitFactory, experimentFactory, $state) {

  return {
    processExpUpdate: processExpUpdate,
  }


  function processExpUpdate(sub, exp, habit){
    experimentFactory.updateExperiment(sub.id, { experiment: sub })
    .then(checkForActivity);

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
  }  
}



angular
  .module('app')
  .factory('formProcessor', formProcessor)
