function experimentFactory($http, baseFactory) {

  var factory = {
    getExperiments: getExperiments,
    getExperiment: getExperiment,
    createExperiment: createExperiment,
    updateExperiment: updateExperiment,
    deleteExperiment: deleteExperiment
  };
  return factory;

  function getExperiments(user) {
    return $http.get(baseFactory.url + '/user/' + user.id + '/experiments').then(returnData);
  }

  function getExperiment(id) {
    return $http.get(baseFactory.url + '/experiments/' + id).then(returnData);
  }

  function createExperiment() {

  }

  function updateExperiment(id, data) {
    return $http.patch(baseFactory.url + '/experiments/' + id, data).then(returnData);
  }

  function deleteExperiment() {

  }
  function returnData(response){
    return response.data;
  }

}

angular
  .module('app')
  .factory('experimentFactory', experimentFactory)
