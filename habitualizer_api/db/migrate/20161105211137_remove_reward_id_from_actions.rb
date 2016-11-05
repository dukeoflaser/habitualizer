class RemoveRewardIdFromActions < ActiveRecord::Migration[5.0]
  def change
    remove_column :actions, :rewards_id
  end
end
