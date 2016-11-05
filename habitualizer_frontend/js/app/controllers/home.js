angular
  .module('app')
  .controller('HomeController', function(user) {
    this.email = user.email;

    console.log('The user:');
    console.log(user);

  });
