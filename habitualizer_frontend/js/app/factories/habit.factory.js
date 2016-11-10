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

  function getHabits(user, params) {
    params ? ps = '?' + params : ps = '';
    var url = baseUrl + '/user/' + user.id + '/habits' + ps
    return $http.get(url).then(returnData);
  }

  function getHabit(id) {
    return $http.get(baseUrl + '/habits/' + id).then(returnData);
  }

  function createHabit() {

  }

  function updateHabit() {

  }

  function deleteHabit() {

  }

  function returnData(response){
    return response.data;
  }

}

angular
  .module('app')
  .factory('habitFactory', habitFactory)
