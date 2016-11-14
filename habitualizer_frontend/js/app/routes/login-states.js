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
      resolve: {
        user: function($cookies){
          return $cookies.getObject('currentUser');
        }
      }
    })

    .state('register', {
      url: '/users/sign_up',
      templateUrl: 'js/angular-devise/views/registration.html',
      controller: 'RegistrationController',
      controllerAs: 'register',
      resolve: {
        user: function($cookies){
          return $cookies.getObject('currentUser');
        }
      }
    });

    $urlRouterProvider.otherwise('/');
  });
