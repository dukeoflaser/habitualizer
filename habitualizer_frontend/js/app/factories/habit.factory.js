function HabitFactory($http) {

  return {
    getHabits: getHabits,
    getHatit: getHabit,
    createHabit: createHabit,
    updateHabit: updateHabit,
    deleteHabit: deletehabit
  }

  function getHabits() {
    return $http.get(url)
                .then(function(response) {
                    return response.data
                }
  }

}

function activate() {
  HabitFactorg.getHabits()
              .then(function(data) {
                $scope.habits = data.habits
              })
}
