function UserController($scope, $cookies, $state) {
  $scope.currentUser = $cookies.getObject('currentUser');
  if ($scope.currentUser === undefined) {
    $state.go('root');
  }
}

angular
  .module('app')
  .controller('UserController', UserController);
