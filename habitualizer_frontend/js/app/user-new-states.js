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
      url: '/habit'
    })

    .state('user.new.experiment', {
      url: '/experiment'
    });

  });
