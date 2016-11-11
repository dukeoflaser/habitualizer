function cueFactory($http) {
  var baseUrl = 'http://localhost:3000';

  var factory = {
    getCues: getCues
  }

  return factory;

  function getCues(){
    return $http.get(baseUrl + '/cues').then(returnData);
  }

  function returnData(response){
    return response.data;
  }

}

angular
  .module('app')
  .factory('cueFactory', cueFactory)
