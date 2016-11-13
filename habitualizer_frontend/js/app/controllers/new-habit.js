function NewHabitController($scope, cuesData, rewardsData, habitFactory, formProcessor) {
  var vm = this;

  vm.habit = {}
  vm.habit.user_id = $scope.$parent.$parent.currentUser.id

  vm.cues = cuesData.cues;
  vm.rewards = rewardsData.rewards;

  vm.selectCue = function(cue){
    vm.habit.cue_attributes.name = cue.name;
    vm.habit.cue_attributes.nature = cue.nature;
  }

  vm.selectReward = function(reward){
    vm.habit.reward_attributes = {};
    vm.habit.reward_attributes.craving = reward.craving;
  }

  vm.submit = function(submission){
    formProcessor.processHabitCreate(submission);
  }
}


angular
  .module('app')
  .controller('NewHabitController', NewHabitController);
