function habitFactory($http) {
  var baseUrl = 'http://localhost:3000';
  var factory = {
    getHabits: getHabits,
    getHabit: getHabit,
    createHabit: createHabit,
    updateHabit: updateHabit,
    deleteHabit: deleteHabit
  };
  return factory;

  function getHabits() {
    return $http.get(baseUrl + '/user/1/habits');
            // .then(function(response){
            //   return response.data
            // })

    // return "What's up from getHabits."
  }

  function getHabit() {

  }

  function createHabit() {

  }

  function updateHabit() {

  }

  function deleteHabit() {

  }
}

angular
  .module('app')
  .factory('habitFactory', habitFactory)
