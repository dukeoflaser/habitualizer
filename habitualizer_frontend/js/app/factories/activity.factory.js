function activityFactory($http) {
  var baseUrl = 'http://localhost:3000';

  var factory = {
    getActivities: getActivities,
    getActivity: getActivity,
    createActivity: createActivity,
    updateActivity: updateActivity,
    deleteActivity: deleteActivity
  };
  return factory;

  function getActivities(user) {
    var url = baseUrl + '/user/' + user.id + '/activitys'
    return $http.get(url).then(returnData);
  }

  function getActivity(id) {
    return $http.get(baseUrl + '/activities/' + id).then(returnData);
  }

  function createActivity() {

  }

  function updateActivity() {

  }

  function deleteActivity() {

  }

  function returnData(response){
    return response.data;
  }

}

angular
  .module('app')
  .factory('activityFactory', activityFactory)
