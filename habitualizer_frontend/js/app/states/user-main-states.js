angular
  .module('app')
  .config(function ($stateProvider) {
    var baseUrl = 'http://localhost:3000'
    $stateProvider

    .state('user.home', {
      url: '/home',
      templateUrl: 'js/app/views/home.html',
      controller: 'HomeController',
      controllerAs: 'user',
      resolve: {
        user: ['Auth', function(Auth){
          return Auth.currentUser();
        }],
        userHabits: function($http, user){
          return $http({
            method: 'GET',
            url: baseUrl + '/user/' + user.id + '/habits'
          });
        }
      }
    })

    .state('user.complete', {
      url: '/complete',
      templateUrl: 'js/app/views/habits/complete.html',
      controller: 'CompleteController',
      controllerAs: 'user',
      resolve: {
        user: ['Auth', function(Auth){
          return Auth.currentUser();
        }],
        userCompleteHabits: function($http, user){
          return $http({
            method: 'GET',
            url: baseUrl + '/user/' + user.id + '/habits?complete=true'
          });
        }
      }
    })

    .state('user.experiments', {
      url: '/experiments',
      templateUrl: 'js/app/views/experiments/experiments.html',
      controller: 'ExperimentController',
      controllerAs: 'user',
      resolve: {
        user: ['Auth', function(Auth){
          return Auth.currentUser();
        }],
        userExperiments: function($http, user){
          return $http({
            method: 'GET',
            url: baseUrl + '/user/' + user.id + '/experiments'
          });
        }
      }
    });

  });
