var PlanPanel = {
  templateUrl: 'js/app/components/plan-panel/plan-panel.html',
  scope: {},
  bindings: {
    habit: '='
  },
  controllerAs: 'user'
}

angular
  .module('app')
  .component('hbPlanPanel', PlanPanel);
