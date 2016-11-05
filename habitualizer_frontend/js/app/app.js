angular
  .module('app', ['Devise', 'ui.router'])
  .config(function(AuthProvider){
    AuthProvider.baseUrl('http://localhost:3000');
  })
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('root', {
        url: '/',
        templateUrl: 'js/app/views/welcome.html'
      })
      .state('home', {
        url: '/home',
        templateUrl: 'js/app/views/home.html',
        controller: 'HomeController',
        controllerAs: 'user',
        resolve: {
          user: ['Auth', function(Auth){
            return Auth.currentUser();
          }]
        }
      })
      .state('login', {
        url: '/users/sign_in',
        templateUrl: 'js/angular-devise/views/login.html',
        controller: 'LoginController'
      })
      .state('register', {
        url: '/users/sign_up',
        templateUrl: 'js/angular-devise/views/registration.html',
        controller: 'RegistrationController'
      });

      $urlRouterProvider.otherwise('/');
    });
