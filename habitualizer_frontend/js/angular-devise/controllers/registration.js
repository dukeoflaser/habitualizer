angular
  .module('app')
  .controller('RegistrationController', function(Auth, $scope, $state) {
    var vm = this;

    vm.submit = function(user){
      var credentials = user;

      Auth.register(credentials).then(function(registeredUser) {
          console.log(registeredUser); // => {id: 1, ect: '...'}
          $state.go('user.home');
      }, function(error) {
          // Registration failed...
      });
    }



    $scope.$on('devise:new-registration', function(event, user) {
        // ...
    });
  });
