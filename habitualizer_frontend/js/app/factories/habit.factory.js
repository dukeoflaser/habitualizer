function habitFactory($http) {
  var baseUrl = 'http://localhost:3000';
  // var user = Auth.currentUser();

  var factory = {
    getHabits: getHabits,
    getHabit: getHabit,
    createHabit: createHabit,
    updateHabit: updateHabit,
    deleteHabit: deleteHabit
  };
  return factory;

  function getHabits(user) {

    return $http.get(baseUrl + '/user/' + user.id + '/habits')
            .then(function(response){
              return response.data
            });
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
