angular
  .module('app')
  .controller('RegistrationController', function(Auth, $scope, $state) {
    var vm = this;

    vm.submit = function(user){
      var credentials = user;

      Auth.register(credentials).then(function(registeredUser) {

          $state.go('user.home');
      }, function(error) {
          // Registration failed...
          vm.hasEmailError = true;
          vm.emailError = error.config.data.user.email;
          vm.messageError = error.data.errors.email[0];
      });
    }



    $scope.$on('devise:new-registration', function(event, user) {
        // ...
    });
  });
