function ShowHabitController(habitData, formProcessor) {
  var vm = this;

  vm.habit = habitData.habit;
  if(vm.habit.activity && vm.habit.activity.description != '') {
    vm.validActivity = true;
  }

  vm.delete = function(submission) {
    formProcessor.processHabitDelete(submission);
  }
}

angular
  .module('app')
  .controller('ShowHabitController', ShowHabitController);
