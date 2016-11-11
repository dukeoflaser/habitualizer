function baseFactory() {
  return { url: 'http://localhost:3000' }
}

angular
  .module('app')
  .factory('baseFactory', baseFactory)
