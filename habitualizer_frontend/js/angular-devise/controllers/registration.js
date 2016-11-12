angular
  .module('app')
  .controller('RegistrationController', function(Auth, $scope, $state) {
    var vm = this;
    vm.emailError = '';
    vm.messageError = '';
    
    vm.submit = function(user){
      var credentials = user;

      Auth.register(credentials).then(function(registeredUser) {
          console.log(registeredUser); // => {id: 1, ect: '...'}
          $state.go('user.home');
      }, function(error) {
          // Registration failed...
          console.log(error);
          vm.emailError = error.config.data.user.email;
          vm.messageError = error.data.errors.email[0];
      });
    }



    $scope.$on('devise:new-registration', function(event, user) {
        // ...
    });
  });
