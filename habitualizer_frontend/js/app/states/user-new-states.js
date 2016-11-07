angular
  .module('app')
  .config(function ($stateProvider) {
  $stateProvider

    .state('user.new', {
      abstract: true,
      url: '/new',
      template: '<div ui-view></div>'
    })

    .state('user.new.habit', {
      url: '/habit',
      templateUrl: 'js/app/views/habits/new.html',
      controller: 'NewHabitController'
    })

    .state('user.new.experiment', {
      url: '/experiment',
      templateUrl: 'js/app/views/experiments/new.html',
      controller: 'NewExperimentController'
    });

  });
