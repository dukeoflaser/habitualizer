angular
  .module('app', ['Devise', 'ui.router'])
  .config(function(AuthProvider){
    AuthProvider.baseUrl('http://localhost:3000');
  });
