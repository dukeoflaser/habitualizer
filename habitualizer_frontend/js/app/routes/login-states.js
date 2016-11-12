angular
  .module('app')
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('root', {
      url: '/',
      templateUrl: 'js/app/views/welcome.html'
    })

    .state('login', {
      url: '/users/sign_in',
      templateUrl: 'js/angular-devise/views/login.html',
      controller: 'LoginController',
      controllerAs: 'login'
    })

    .state('register', {
      url: '/users/sign_up',
      templateUrl: 'js/angular-devise/views/registration.html',
      controller: 'RegistrationController',
      controllerAs: 'register'
    });

    $urlRouterProvider.otherwise('/');
  });
