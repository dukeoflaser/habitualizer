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
      .state('login', {
        url: '/users/sign_in',
        templateUrl: 'js/angular-devise/views/login.html',
        controller: 'LoginController'
      })
      .state('register', {
        url: '/users/sign_up',
        templateUrl: 'js/angular-devise/views/registration.html',
        controller: 'RegistrationController'
      })



      .state('user', {
        url: '/user',
        templateUrl: 'js/app/views/user.html'
      })
      .state('user.home', {
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
      .state('user.complete', {
        url: '/complete',
        templateUrl: 'js/app/views/habits/complete.html'
      })
      .state('user.experiments', {
        url: '/experiments',
        templateUrl: 'js/app/views/experiments/experiments.html'
      });
      // .state('habit', {
      //   url: '/habit/:id'
      // })
      // .state('experiment', {
      //   url: '/experiment/:id'
      // })
      //
      //
      //
      // .state('new', {
      //   abstract: true,
      //   url: '/new',
      //   template: '<div ui-view></div>'
      // })
      // .state('new.habit', {
      //   url: '/habit'
      // })
      // .state('new.cue', {
      //   url: '/cue'
      // })
      // .state('new.reward', {
      //   url: '/reward'
      // })
      // .state('new.experiment', {
      //   url: '/experiment'
      // })
      // .state('new.activity', {
      //   url: '/activity'
      // })
      //
      //
      // .state('edit', {
      //   abstract: true,
      //   url: '/edit',
      //   template: '<div ui-view></div>'
      // })
      // .state('edit.habit', {
      //   url: '/habit'
      // })
      // .state('edit.cue', {
      //   url: '/cue'
      // })
      // .state('edit.reward', {
      //   url: '/reward'
      // })
      // .state('edit.experiment', {
      //   url: '/experiment'
      // })
      // .state('edit.activity', {
      //   url: '/activity'
      // });

      $urlRouterProvider.otherwise('/');
    });
