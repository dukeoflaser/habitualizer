var HabitTable = {
  scope: {},
  bindings: {
    habits: '<'
  },
  templateUrl: 'js/app/components/habit-table/habit-table.html',
  controller: function(formProcessor, habitFactory, noteCreator){
    var vm = this;

    this.habits.forEach(function(habit, i){
      habit.noteDisplayed = false;
    });

    vm.noteClick = function(habit) {
      if (habit.noteDisplayed != true) {
        habit.noteDisplayed = true;
      } else {
        habit.noteDisplayed = false;
      }
    }

    vm.increment = function(habit){
      habit.likes += 1;
      habitFactory.updateHabit(habit.id, { habit: habit });
    }

    vm.decrement = function(habit){
      habit.likes -= 1;
      habitFactory.updateHabit(habit.id, { habit: habit });
    }


    vm.delete = function(submission) {
      formProcessor.processHabitDelete(submission);
    }
  },
  controllerAs: 'user'
}

angular
  .module('app')
  .component('hbHabitTable', HabitTable);
