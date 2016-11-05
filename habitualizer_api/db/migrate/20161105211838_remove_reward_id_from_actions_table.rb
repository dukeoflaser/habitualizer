class RemoveRewardIdFromActionsTable < ActiveRecord::Migration[5.0]
  def change
    remove_column :actions, :reward_id
  end
end
