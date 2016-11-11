function base() {
  return { url: 'http://localhost:3000' }
}

angular
  .module('app')
  .factory('base', base)
