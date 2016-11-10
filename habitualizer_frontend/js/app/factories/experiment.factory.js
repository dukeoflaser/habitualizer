function experimentFactory($http) {
  var baseUrl = 'http://localhost:3000';

  var factory = {
    getExperiments: getExperiments,
    getExperiment: getExperiment,
    createExperiment: createExperiment,
    updateExperiment: updateExperiment,
    deleteExperiment: deleteExperiment
  };
  return factory;

  function getExperiments(user) {
    return $http.get(baseUrl + '/user/' + user.id + '/experiments').then(returnData);
  }

  function getExperiment(id) {
    return $http.get(baseUrl + '/experiments/' + id).then(returnData);
  }

  function createExperiment() {

  }

  function updateExperiment() {

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
