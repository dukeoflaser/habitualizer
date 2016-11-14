angular
  .module('app', ['Devise', 'ui.router', 'ngMessages', 'ngCookies'])
  .config(function(AuthProvider){
    AuthProvider.baseUrl('http://localhost:3000');
  });
