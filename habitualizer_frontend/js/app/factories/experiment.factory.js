function experimentFactory($http, baseFactory) {

  return {
    getExperiments: getExperiments,
    getExperiment: getExperiment,
    createExperiment: createExperiment,
    updateExperiment: updateExperiment,
    deleteExperiment: deleteExperiment
  };


  function getExperiments(user) {
    return $http.get(baseFactory.url + '/user/' + user.id + '/experiments').then(returnData);
  }

  function getExperiment(id) {
    return $http.get(baseFactory.url + '/experiments/' + id).then(returnData);
  }

  function createExperiment(data) {
    return $http.post(baseFactory.url + '/experiments', data).then(returnData);
  }

  function updateExperiment(id, data) {
    return $http.patch(baseFactory.url + '/experiments/' + id, data).then(returnData);
  }

  function deleteExperiment(id) {
    return $http.delete(baseFactory.url + '/experiments/' + id);
  }
  function returnData(response){
    return response.data;
  }

}

angular
  .module('app')
  .factory('experimentFactory', experimentFactory)
