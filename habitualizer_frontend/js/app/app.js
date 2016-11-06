angular
  .module('app', ['Devise', 'ui.router'])
  .config(function(AuthProvider){
    AuthProvider.baseUrl('http://localhost:3000');
  });
      // .state('habit', {
      //   url: '/habit/:id'
      // })
      // .state('experiment', {
      //   url: '/experiment/:id'
      // })
      //
      //
      //
      // .state('new', {
      //   abstract: true,
      //   url: '/new',
      //   template: '<div ui-view></div>'
      // })
      // .state('new.habit', {
      //   url: '/habit'
      // })
      // .state('new.cue', {
      //   url: '/cue'
      // })
      // .state('new.reward', {
      //   url: '/reward'
      // })
      // .state('new.experiment', {
      //   url: '/experiment'
      // })
      // .state('new.activity', {
      //   url: '/activity'
      // })
      //
      //
      // .state('edit', {
      //   abstract: true,
      //   url: '/edit',
      //   template: '<div ui-view></div>'
      // })
      // .state('edit.habit', {
      //   url: '/habit'
      // })
      // .state('edit.cue', {
      //   url: '/cue'
      // })
      // .state('edit.reward', {
      //   url: '/reward'
      // })
      // .state('edit.experiment', {
      //   url: '/experiment'
      // })
      // .state('edit.activity', {
      //   url: '/activity'
      // });
