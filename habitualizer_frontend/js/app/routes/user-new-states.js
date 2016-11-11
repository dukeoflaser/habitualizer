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
        }
      }
    })

    .state('user.new.experiment', {
      url: '/experiment',
      templateUrl: 'js/app/views/experiments/new.html',
      controller: 'NewExperimentController',
      resolve: {
        rewardsData: function(rewardFactory){
          return rewardFactory.getRewards();
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
