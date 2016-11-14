function UserController($state, $scope, user) {
  user === undefined ? $state.go('root') : $scope.currentUser = user;

  // Note: Tried doing this in onEnter but kept getting a
  // 'globals on null property error'.
  // Seems to be an angular issue.
  // https://github.com/angular-ui/ui-router/issues/326
}

angular
  .module('app')
  .controller('UserController', UserController);
