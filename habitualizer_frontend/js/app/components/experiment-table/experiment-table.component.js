var ExperimentTable = {
  templateUrl: 'js/app/components/experiment-table/experiment-table.html',
  bindings: {
    rewards: '<',
    experiments: '<'
  },
  controller: function() {
    var vm = this;
    console.log(this.experiments);

  },
  controllerAs: 'user'
}

angular
  .module('app')
  .component('hbExperimentTable', ExperimentTable)
