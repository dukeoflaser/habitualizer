function activityFactory($http, baseFactory) {

  var factory = {
    getActivities: getActivities,
    getActivity: getActivity,
    createActivity: createActivity,
    updateActivity: updateActivity,
    deleteActivity: deleteActivity
  };
  return factory;

  function getActivities(user) {
    var url = baseFactory.url + '/user/' + user.id + '/activitys'
    return $http.get(url).then(returnData);
  }

  function getActivity(id) {
    return $http.get(baseFactory.url + '/activities/' + id).then(returnData);

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
