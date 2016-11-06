var Header = {
  templateUrl: 'js/app/components/header/header.html',
  controller: function(){
    console.log('This is from the header component.');
  }
};


angular
  .module('app')
  .component('hbHeader', Header);
