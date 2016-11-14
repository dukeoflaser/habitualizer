angular
  .module('app')
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('root', {
      url: '/',
      templateUrl: 'js/app/views/welcome.html',
      onEnter: function(baseFactory) {
        baseFactory.redirectIfLoggedIn();
      }
    })

    .state('login', {
      url: '/users/sign_in',
      templateUrl: 'js/angular-devise/views/login.html',
      controller: 'LoginController',
      controllerAs: 'login',
      onEnter: function(baseFactory) {
        baseFactory.redirectIfLoggedIn();
      }
    })

    .state('register', {
      url: '/users/sign_up',
      templateUrl: 'js/angular-devise/views/registration.html',
      controller: 'RegistrationController',
      controllerAs: 'register',
      onEnter: function(baseFactory) {
        baseFactory.redirectIfLoggedIn();
      }
    });

    $urlRouterProvider.otherwise('/');
  });
