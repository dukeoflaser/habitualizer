angular
  .module('app')
  .config(function ($stateProvider) {
    $stateProvider

    .state('user.home', {
      url: '/home',
      templateUrl: 'js/app/views/home.html',
      controller: 'HomeController',
      controllerAs: 'user',
      resolve: {
        user: function($cookies){
          return $cookies.getObject('currentUser');
        },
        habitData: function(habitFactory, user){
          return habitFactory.getHabits(user);
        }
      }
    })

    .state('user.complete', {
      url: '/complete',
      templateUrl: 'js/app/views/habits/complete.html',
      controller: 'CompleteController',
      resolve: {
        user: ['Auth', function(Auth){
          return Auth.currentUser();
        }],
        completeHabitData: function(habitFactory, user){
          var params = 'complete=true';
          return habitFactory.getHabits(user, params);
        }
      }
    })

    .state('user.experiments', {
      url: '/experiments',
      templateUrl: 'js/app/views/experiments/experiments.html',
      controller: 'ExperimentController',
      resolve: {
        user: ['Auth', function(Auth){
          return Auth.currentUser();
        }],
        experimentData: function(experimentFactory, user){
          return experimentFactory.getExperiments(user);
        }
      }
    });

  });
