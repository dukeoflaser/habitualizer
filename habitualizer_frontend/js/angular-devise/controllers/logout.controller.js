angular
  .module('app')
  .controller('LogoutController', function(Auth, $scope, $state, $cookies) {
    var config = {
            headers: {
                'X-HTTP-Method-Override': 'DELETE'
            }
        };

        this.logout = function(){
          Auth.logout(config).then(function() {
              alert("You're signed out now.");
              $state.go('root');
          }, function(error) {
              // An error occurred logging out.
          });
        }


        $scope.$on('devise:logout', function(event, oldCurrentUser) {
          $cookies.remove('currentUser');
        });
  });
