angular
  .module('app')
  .controller('LogoutController', function(Auth, $scope) {
    var config = {
            headers: {
                'X-HTTP-Method-Override': 'DELETE'
            }
        };

        Auth.logout(config).then(function(oldUser) {
            // alert(oldUser.name + "you're signed out now.");
        }, function(error) {
            // An error occurred logging out.
        });

        $scope.$on('devise:logout', function(event, oldCurrentUser) {
            // ...
        });
  });
