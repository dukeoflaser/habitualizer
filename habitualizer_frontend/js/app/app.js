angular
  .module('app', ['Devise', 'ui.router', 'ngMessages'])
  .config(function(AuthProvider){
    AuthProvider.baseUrl('http://localhost:3000');
  });
