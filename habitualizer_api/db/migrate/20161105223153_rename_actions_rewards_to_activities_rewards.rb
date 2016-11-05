class RenameActionsRewardsToActivitiesRewards < ActiveRecord::Migration[5.0]
  def change
    rename_table :actions_rewards, :activities_rewards
  end
end
