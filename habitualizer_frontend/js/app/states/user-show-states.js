angular
  .module('app')
  .config(function ($stateProvider) {
    var baseUrl = 'http://localhost:3000'
    $stateProvider

    .state('user.show', {
      abstract: true,
      url: '/show',
      template: '<div ui-view></div>'
    })

    .state('user.show.habit', {
      url: '/habit/:id',
      templateUrl: 'js/app/views/habits/show.html',
      controller: 'ShowHabitController',
      resolve: {
        habit: function($http, $stateParams){
          return $http({
            method: 'GET',
            url: baseUrl + '/habits/' + $stateParams.id
          });
        }
      }
    })

    .state('user.show.experiment', {
      url: '/experiment/:id',
      templateUrl: 'js/app/views/experiments/show.html',
      controller: 'ShowExperimentController',
      resolve: {
        experiment: function($http, $stateParams){
          return $http({
            method: 'GET',
            url: baseUrl + '/habits/' + $stateParams.id
          });
        }
      }
    });

  });
