function UserController($state, $scope, user) {
  user === undefined ? $state.go('root') : $scope.currentUser = user;
}

angular
  .module('app')
  .controller('UserController', UserController);
