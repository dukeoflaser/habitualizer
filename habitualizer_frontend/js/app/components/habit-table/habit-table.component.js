var HabitTable = {
  scope: {},
  bindings: {
    habits: '<'
  },
  templateUrl: 'js/app/components/habit-table/habit-table.html',
  controllerAs: 'user'
}

angular
  .module('app')
  .component('hbHabitTable', HabitTable);
