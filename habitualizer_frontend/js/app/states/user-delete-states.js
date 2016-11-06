angular
  .module('app')
  .config(function ($stateProvider) {
  $stateProvider

    .state('user.delete', {
      abstract: true,
      url: '/delete',
      template: '<div ui-view></div>'
    })

    .state('user.delete.habit', {
      url: '/habit'
    })

    .state('user.delete.experiment', {
      url: '/experiment'
    });

  });
