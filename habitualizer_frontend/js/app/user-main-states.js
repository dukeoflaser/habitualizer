angular
  .module('app')
  .config(function ($stateProvider) {
  $stateProvider

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
    
  });
