angular
  .module('app')
  .controller('LoginController', function(Auth, $scope, $state) {

//////////////////////////////////////////
    $scope.submit = function(credentials) {

      Auth.login(credentials)
          .then(logResponse, logError)
          .catch(logError)

      function logResponse(response){
        console.log(response)
      }

      function logError(error){
        console.log(error);
      }

    };
//////////////////////////////////////////

    $scope.$on('devise:login', function(event, currentUser) {
        // after a login, a hard refresh, a new tab
         $state.go('user.home');
    });

    $scope.$on('devise:new-session', function(event, currentUser) {
        // user logged in by Auth.login({...})
    });
  });
