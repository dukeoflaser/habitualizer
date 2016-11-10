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

    return $http.get(baseUrl + '/user/' + user.id + '/experiments')
            .then(function(response){
              return response.data
            });
  }

  function getExperiment() {

  }

  function createExperiment() {

  }

  function updateExperiment() {

  }

  function deleteExperiment() {

  }

}

angular
  .module('app')
  .factory('experimentFactory', experimentFactory)
