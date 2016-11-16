function ShowHabitController($scope, habitData, experiments, currentExperiment, formProcessor) {
  var vm = this;

  vm.habit = habitData.habit;
  vm.email = $scope.$parent.$parent.currentUser.email;
  vm.experiments = experiments;
  vm.experiment = currentExperiment.experiment;

  if (vm.habit.activity) {
    vm.phrase = 'I will ' +
    vm.habit.activity.description +
    ' because it provides me with ' +
    vm.experiment.substitute.craving;
    vm.plan = 'Replace ' + vm.habit.name +
    ' with ' +
    vm.experiment.substitute.craving;
  }

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
