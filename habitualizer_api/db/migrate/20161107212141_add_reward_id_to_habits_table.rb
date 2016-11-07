class AddRewardIdToHabitsTable < ActiveRecord::Migration[5.0]
  def change
    add_column :habits, :reward_id, :integer
  end
end
