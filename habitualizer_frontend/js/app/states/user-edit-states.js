angular
  .module('app')
  .config(function ($stateProvider) {
    var baseUrl = 'http://localhost:3000'
    $stateProvider

    .state('user.edit', {
      abstract: true,
      url: '/edit',
      template: '<div ui-view></div>'
    })

    .state('user.edit.habit', {
      url: '/habit/:id',
      templateUrl: 'js/app/views/habits/edit.html',
      controller: 'EditHabitController',
      resolve: {
        habit: function($http, $stateParams){
          return $http({
            method: 'GET',
            url: baseUrl + '/habits/' + $stateParams.id
          });
        }
      }
    })

    .state('user.edit.experiment', {
      url: '/experiment/:id',
      templateUrl: 'js/app/views/experiments/edit.html',
      controller: 'EditExperimentController',
      resolve: {
        experiment: function($http, $stateParams){
          return $http({
            method: 'GET',
            url: baseUrl + '/experiments/' + $stateParams.id
          });
        }
      }
    });

  });
