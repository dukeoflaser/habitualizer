angular
  .module('app', ['Devise'])
  .config(function(AuthProvider){
    AuthProvider.baseUrl('http://localhost:3000');
  });

angular
  .module('app')
  .controller('myCtrl', function(Auth, $scope) {
        var credentials = {
            email: 'palu@email.com',
            password: 'password'
        };


        $scope.test = 'Test';

        Auth.login(credentials).then(function(user) {
            console.log(user); // => {id: 1, ect: '...'}
        }, function(error) {
            // Authentication failed...
        });

        $scope.$on('devise:login', function(event, currentUser) {
            // after a login, a hard refresh, a new tab
        });

        $scope.$on('devise:new-session', function(event, currentUser) {
            // user logged in by Auth.login({...})
        });
    });
