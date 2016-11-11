function rewardFactory($http, baseFactory) {

  var factory = {
    getRewards:getRewards
  }

  return factory;

  function getRewards() {
    return $http.get(baseFactory.url + '/rewards').then(returnData);
  }

  function returnData(response) {
    return response.data;
  }

}

angular
  .module('app')
  .factory('rewardFactory', rewardFactory)
