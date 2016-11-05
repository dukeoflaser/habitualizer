angular
  .module('app', ['Devise'])
  .config(function(AuthProvider){
    AuthProvider.baseUrl('http://localhost:3000');
  });
