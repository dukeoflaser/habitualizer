function noteCreator() {

  return {
    noteDisplayer: noteDisplayer
  }

  function noteDisplayer(habit) {
    if (habit.noteDisplayed != true) {
      habit.noteDisplayed = true;

      var target = document.getElementById('habitRow-' + habit.id);
      var newRow = document.createElement('tr');
      var newCell = document.createElement('td');
      var textArea = document.createElement('textarea');
      newCell.appendChild(textArea);
      newRow.appendChild(newCell);
      target.parentNode.insertBefore(newRow, target.nextSibling);
      return true;
    }
  }


}

angular
  .module('app')
  .factory('noteCreator', noteCreator);
