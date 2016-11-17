var HabitTable = {
  scope: {},
  bindings: {
    habits: '<'
  },
  templateUrl: 'js/app/components/habit-table/habit-table.html',
  controller: function(formProcessor){
    var vm = this;

    vm.delete = function(submission) {
      formProcessor.processHabitDelete(submission);
    }
  },
  controllerAs: 'user'
}

angular
  .module('app')
  .component('hbHabitTable', HabitTable);
