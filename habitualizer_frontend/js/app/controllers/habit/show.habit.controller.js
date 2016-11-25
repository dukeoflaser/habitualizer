function ShowHabitController($scope, habitData, experiments, currentExperiment, formProcessor, noteFactory) {
  var vm = this;

  vm.habit = habitData.habit;
  vm.email = $scope.$parent.$parent.currentUser.email;
  vm.experiments = experiments;
  vm.notePanel = false;
  checkForNotes();

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
    noteFactory.deleteNote(note).then(function(response){
      console.log('From THen ON...');
      note.displayed = false;
      console.log(note);
      vm.habit.notes.forEach(function(n, i, obj){
        if (note.id == n.id) {
          console.log('match');
          obj.splice(i, 1);
        }
      });
      checkForNotes();
    });
  }

  vm.habit.notes.forEach(function(note, i) {
    note.displayed = true;
  });

  function checkForNotes() {
    console.log(vm.habit.notes);
    if (vm.habit.notes.length === 0) {
      console.log('set to false');
      vm.notePanel = false;

      console.log(vm.notePanel);
    } else {
      vm.notePanel = true;
    }
  }

}

angular
  .module('app')
  .controller('ShowHabitController', ShowHabitController);
