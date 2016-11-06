angular
  .module('app')
  .config(function ($stateProvider) {
  $stateProvider

    .state('user.edit', {
      abstract: true,
      url: '/edit',
      template: '<div ui-view></div>'
    })

    .state('user.edit.habit', {
      url: '/habit',
      templateUrl: 'js/app/views/habits/edit.html'
    })

    .state('user.edit.experiment', {
      url: '/experiment',
      templateUrl: 'js/app/views/experiments/edit.html'
    });

  });
