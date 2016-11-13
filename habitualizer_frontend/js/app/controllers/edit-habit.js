angular
  .module('app')
  .controller('EditHabitController', function(habitData, formProcessor) {
    var vm = this;
    var habit = habitData.habit;

    vm.habit = habit;
    vm.habit.cue_attributes = habit.cue;
    vm.habit.reward_attributes = habit.reward;

    vm.submit = function(submission){
      formProcessor.processHabitUpdate(submission);
    }

  });
