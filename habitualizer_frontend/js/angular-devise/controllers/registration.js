angular
  .module('app')
  .controller('RegistrationController', function(Auth, $scope) {

    this.submit = function(user){
      var credentials = user;
      console.log(user);

      Auth.register(credentials).then(function(registeredUser) {
          console.log(registeredUser); // => {id: 1, ect: '...'}
      }, function(error) {
          // Registration failed...
      });
    }



    $scope.$on('devise:new-registration', function(event, user) {
        // ...
    });
  });
