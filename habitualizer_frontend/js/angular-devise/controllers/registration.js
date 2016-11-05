angular
  .module('app')
  .controller('RegistrationController', function(Auth, $scope, $state) {

    this.submit = function(user){
      var credentials = user;

      Auth.register(credentials).then(function(registeredUser) {
          console.log(registeredUser); // => {id: 1, ect: '...'}
          $state.go('home');
      }, function(error) {
          // Registration failed...
      });
    }



    $scope.$on('devise:new-registration', function(event, user) {
        // ...
    });
  });
