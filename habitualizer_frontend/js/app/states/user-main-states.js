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
          var userID = user.id;
          // return userID;
          return $http({
            method: 'GET',
            url: baseUrl + '/user/' + userID + '/habits'
          });
        }
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
