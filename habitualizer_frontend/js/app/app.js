angular
  .module('app', ['Devise', 'ui.router'])
  .config(function(AuthProvider){
    AuthProvider.baseUrl('http://localhost:3000');
  })
  .config(function ($stateProvider) {
        $stateProvider
            .state('login', {
                url: '/users/sign_up',
                templateUrl: 'js/angular-devise/views/login.html',
                controller: 'LoginController'
            });
    });
