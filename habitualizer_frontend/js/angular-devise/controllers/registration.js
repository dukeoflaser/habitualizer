angular
  .module('app')
  .controller('RegistrationController', function(Auth, $scope) {
    var credentials = {
        email: 'user@domain.com',
        password: 'password1',
        password_confirmation: 'password1'
    };

    this.controller = 'RegistrationController';

    Auth.register(credentials).then(function(registeredUser) {
        console.log(registeredUser); // => {id: 1, ect: '...'}
    }, function(error) {
        // Registration failed...
    });

    $scope.$on('devise:new-registration', function(event, user) {
        // ...
    });
  });
