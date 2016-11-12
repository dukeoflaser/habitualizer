angular
  .module('app')
  .controller('LoginController', function(Auth, $scope, $state) {
    var vm = this;

    vm.submit = function(credentials) {

      Auth.login(credentials).then(function(user) {
          // console.log(user); // => {id: 1, ect: '...'}
      }, function(error) {
          // Authentication failed...
          if (error.status == 401) {
            var email = error.config.data.user.email;
            vm.hasErrorMessage = "Either '" + email +
            "' has not been registered or your password was entered incorrectly."
          }
      });

    };

    $scope.$on('devise:login', function(event, currentUser) {
         $state.go('user.home');
    });

    $scope.$on('devise:new-session', function(event, currentUser) {
        // user logged in by Auth.login({...})
    });
  });
