angular
  .module('app')
  .config(function ($stateProvider) {
    var baseUrl = 'http://localhost:3000'
    $stateProvider

    .state('user.new', {
      abstract: true,
      url: '/new',
      template: '<ui-view></ui-view>'
    })

    .state('user.new.habit', {
      url: '/habit',
      templateUrl: 'js/app/views/habits/new.html',
      controller: 'NewHabitController',
      resolve: {
        user: ['Auth', function(Auth){
          return Auth.currentUser();
        }],
        cuesData: function(cueFactory){
          return cueFactory.getCues();
        },
        rewardsData: function(rewardFactory){
          return rewardFactory.getRewards();
        },
        activities: function($http){
          return $http({
            method: 'GET',
            url: baseUrl + '/activities'
          });
        }
      }
    })

    .state('user.new.experiment', {
      url: '/experiment',
      templateUrl: 'js/app/views/experiments/new.html',
      controller: 'NewExperimentController',
      resolve: {
        cues: function($http){
          return $http({
            method: 'GET',
            url: baseUrl + '/cues'
          });
        },
        rewards: function($http){
          return $http({
            method: 'GET',
            url: baseUrl + '/rewards'
          });
        },
        activities: function($http){
          return $http({
            method: 'GET',
            url: baseUrl + '/activities'
          });
        },
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
    });

  });
