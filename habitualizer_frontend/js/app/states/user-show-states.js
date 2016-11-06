angular
  .module('app')
  .config(function ($stateProvider) {
  $stateProvider

    .state('user.show', {
      abstract: true,
      url: '/show',
      template: '<div ui-view></div>'
    })

    .state('user.show.habit', {
      url: '/habit',
      templateUrl: 'js/app/views/habits/show.html'
    })

    .state('user.show.experiment', {
      url: '/experiment',
      templateUrl: 'js/app/views/experiments/show.html'
    });

  });
