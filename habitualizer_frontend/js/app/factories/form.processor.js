function formProcessor(habitFactory, experimentFactory, $state) {

  return {
    processHabitUpdate: processHabitUpdate,
    processHabitCreate: processHabitCreate,
    processHabitDelete: processHabitDelete,
    processExpUpdate: processExpUpdate,
    processExpCreate: processExpCreate,
    processExpDelete: processExpDelete
  }

  function processHabitUpdate(h) {
    h.cue_attributes.has_been_updated = true;
    h.reward_attributes.has_been_updated = true;

    habitFactory.updateHabit(h.id, { habit: h }).then(gotoHabit);
  }


  function processHabitCreate(hbt) {
    habitFactory.createHabit({ habit: hbt }).then(gotoHabit);
  }


  function processHabitDelete(hbt) {
    var certain = confirm("Are you certain you want to delete this habit along with its experiments?")
    if (certain) {
      habitFactory.deleteHabit(hbt.id)
      .then(function(res){
        hbt.experiments.forEach(function(exp){
          experimentFactory.deleteExperiment(exp.id);
        });

        goHome();
      });
    }
  }

  function processExpUpdate(sub, exp, habit) {
    experimentFactory.updateExperiment(sub.id, { experiment: sub })
    .then(checkForActivity);

    function checkForActivity(data) {
      if(habit.activity_attributes) {
        if(exp.successful == false) {
          habit.activity_attributes.description = "";
        }
        habitFactory.updateHabit(habit.id, { habit: habit })
          .then(gotoExp(data));
      } else {
        gotoExp(data);
      }
    }
  }

  function processExpCreate(exp) {
    experimentFactory.createExperiment({ experiment: exp }).then(gotoExp);
  };

  function processExpDelete(id) {
    var certain = confirm("Are you certain you want to delete this experiment?")
    if (certain) experimentFactory.deleteExperiment(id).then(goHome);
  }

  function goHome() {
    $state.go('user.home');
  }

  function gotoHabit(data) {
    $state.go('user.show.habit', { id: data.habit.id });
  }

  function gotoExp(data) {
    $state.go('user.show.experiment', { id: data.experiment.id })
  }

}

angular
  .module('app')
  .factory('formProcessor', formProcessor)
