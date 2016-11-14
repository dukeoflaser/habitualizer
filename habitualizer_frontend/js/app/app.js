angular
  .module('app', ['Devise', 'ui.router', 'ngMessages', 'ngCookies'])
  .config(function(AuthProvider, $locationProvider){
    AuthProvider.baseUrl('http://localhost:3000');
    $locationProvider.html5Mode(true);
  });
