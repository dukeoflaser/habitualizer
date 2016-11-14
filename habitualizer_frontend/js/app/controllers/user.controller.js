function UserController($state, $scope, user) {
  $scope.currentUser = user;
}

angular
  .module('app')
  .controller('UserController', UserController);
