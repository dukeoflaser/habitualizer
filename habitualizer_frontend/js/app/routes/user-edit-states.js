angular
  .module('app')
  .config(function ($stateProvider) {
    $stateProvider

    .state('user.edit', {
      abstract: true,
      url: '/edit',
      template: '<ui-view></ui-view>'
    })

    .state('user.edit.habit', {
      url: '/habit/:id',
      templateUrl: 'js/app/views/habits/edit.html',
      controller: 'EditHabitController',
      resolve: {
        habitData: function($stateParams, habitFactory){
          return habitFactory.getHabit($stateParams.id);
        }
      }
    })

    .state('user.edit.experiment', {
      url: '/experiment/:id',
      templateUrl: 'js/app/views/experiments/edit.html',
      controller: 'EditExperimentController',
      resolve: {
        experimentData: function($stateParams, experimentFactory){
          return experimentFactory.getExperiment($stateParams.id);
        },
        activityData: function(experimentData, activityFactory){
          var id = experimentData.experiment.habit.activity_id;
          return activityFactory.getActivity(1); //hardcoded value for debugging.
        }
      }
    });

  });
