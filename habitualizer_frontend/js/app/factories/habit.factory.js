function habitFactory($http, baseFactory) {

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
    var url = baseFactory.url + '/user/' + user.id + '/habits' + ps
    return $http.get(url).then(returnData);
  }

  function getHabit(id) {
    return $http.get(baseFactory.url + '/habits/' + id).then(returnData);
  }

  function createHabit() {

  }

  function updateHabit(id, data) {
    return $http.patch(baseFactory.url + '/habits/' + id, data).then(returnData);
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
