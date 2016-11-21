function ShowHabitController($scope, habitData, experiments, currentExperiment, formProcessor, noteFactory) {
  var vm = this;
  console.log(habitData);
  vm.habit = habitData.habit;
  vm.email = $scope.$parent.$parent.currentUser.email;
  vm.experiments = experiments;

  if (currentExperiment) vm.experiment = currentExperiment.experiment;

  if (vm.habit.activity) {
    vm.phrase = 'I will ' +
    vm.habit.activity.description +
    ' because it provides me with ' +
    vm.experiment.substitute.craving;
    vm.plan = 'Replace ' + vm.habit.reward.craving +
    ' with ' +
    vm.experiment.substitute.craving;
  }

  if(vm.habit.activity && vm.habit.activity.description != '') {
    vm.validActivity = true;
  }

  vm.delete = function(submission) {
    formProcessor.processHabitDelete(submission);
  }

  vm.deleteNote = function(note) {
    noteFactory.deleteNote(note);
  }
}

angular
  .module('app')
  .controller('ShowHabitController', ShowHabitController);
